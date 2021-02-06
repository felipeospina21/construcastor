import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import SEO from "../components/seo"
import KiosksContainer from "../components/KiosksContainer"
import Schedules from "../components/Schedules"
import DatePickerContainer from "../components/DatePickerContainer"
import { Heading } from "@chakra-ui/react"
import BookingConfirmation from "../components/BookingConfirmation"

const ReservasPage = ({ data }) => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()
  const [bookingDate, setBookingDate] = useState(new Date(year, month, day))
  const [bookingTime, setBookingTime] = useState()
  const [bookings, setBookings] = useState([])
  const [bookingKiosk, setBookingKiosk] = useState()

  useEffect(() => {
    getBookings()
  }, [bookingTime, bookingDate])

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

  return (
    <>
      <SEO title="Home" />
      <Heading as="h1" size="2xl" my={3}>
        Reservas
      </Heading>

      <DatePickerContainer
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
        setBookingTime={setBookingTime}
      />

      <Schedules setBookingTime={setBookingTime} />

      <KiosksContainer
        setBookingKiosk={setBookingKiosk}
        timeSelected={bookingTime}
        bookings={bookings}
        setBookings={setBookings}
        kioskosInfo={data}
      />

      <BookingConfirmation
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        bookingKiosk={bookingKiosk}
        bookings={bookings}
      />
    </>
  )
}

export const query = graphql`
  query kioskosQuery {
    allKioskos {
      edges {
        node {
          capacity
          id
        }
      }
    }
  }
`

export default ReservasPage
