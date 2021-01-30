import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import SEO from "../components/seo"
import Layout from "../components/layout"
import KiosksContainer from "../components/KiosksContainer"
import Schedules from "../components/Schedules"
import DatePickerContainer from "../components/DatePickerContainer"
import { Button, Center, Heading } from "@chakra-ui/react"
import BookingConfirmation from "../components/BookingConfirmation"

const IndexPage = () => {
  const [bookingDate, setBookingDate] = useState(new Date())
  const [bookingTime, setBookingTime] = useState()
  const [bookings, setBookings] = useState([])
  const [bookingKiosk, setBookingKiosk] = useState()

  useEffect(() => {
    getBookings()
  }, [bookingDate])

  const getBookings = async () => {
    firebase
      .firestore()
      .collection("bookings")
      .onSnapshot(querySnapshot => {
        const docs = []
        querySnapshot.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id })
        })

        const filteredDocs = docs.filter(
          doc =>
            doc.bookingInfo.bookingDate.seconds * 1000 === bookingDate.getTime()
        )
        setBookings(filteredDocs)
      })
  }
  const setBooking = async () => {
    const times = []
    bookings.forEach(time => {
      times.push(
        `${time.bookingInfo.bookingTime}${time.bookingInfo.bookingKiosk}`
      )
    })

    if (!times.includes(`${bookingTime}${bookingKiosk}`)) {
      firebase
        .firestore()
        .collection("bookings")
        .doc()
        .set({
          bookingInfo: {
            bookingDate,
            bookingTime,
            bookingKiosk,
          },
        })
        .then(function () {
          console.log("Document successfully written!")
        })
        .catch(function (error) {
          console.error("Error writing document: ", error)
        })
    } else {
      console.log("El horario escogido ya se encuentra reservado")
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Heading as="h1" size="2xl" my={3}>
        Reservas
      </Heading>

      <DatePickerContainer
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
      />

      <Schedules setBookingTime={setBookingTime} />

      <KiosksContainer
        setBookingKiosk={setBookingKiosk}
        timeSelected={bookingTime}
        bookings={bookings}
      />

      <BookingConfirmation
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        bookingKiosk={bookingKiosk}
        setBooking={setBooking}
      />
    </Layout>
  )
}

export default IndexPage
