import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import Kiosk from "./Kiosk"
import { Wrap, Center, Heading } from "@chakra-ui/react"

const KiosksContainer = ({ setBookingKiosk, timeSelected, bookings }) => {
  const [kiosks, setKiosks] = useState([])
  const [bookedKiosks, setBookedKiosks] = useState([])

  useEffect(() => {
    getKioskInfo()
    getFilteredKiosks()
  }, [timeSelected])

  const getKioskInfo = async () => {
    firebase
      .firestore()
      .collection("kioskos")
      .onSnapshot(querySnapshot => {
        const docs = []
        querySnapshot.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setKiosks(docs)
      })
  }

  const getFilteredKiosks = () => {
    const newBookedKiosks = []
    const filteredBookingsByTime = bookings.filter(
      booking => booking.bookingInfo.bookingTime === timeSelected
    )
    filteredBookingsByTime.forEach(filteredBooking => {
      newBookedKiosks.push(filteredBooking.bookingInfo.bookingKiosk)
    })
    setBookedKiosks(newBookedKiosks)
  }

  const renderKiosks = kiosks.filter(kiosk => !bookedKiosks.includes(kiosk.id))

  return (
    <Wrap>
      {renderKiosks.length < 1 ? (
        <Center>
          <Heading as="h1">No hay kioskos disponibles en este horario</Heading>
        </Center>
      ) : (
        renderKiosks.map(kiosk => {
          return (
            <Kiosk
              key={kiosk.id}
              kiosk={kiosk}
              setBookingKiosk={setBookingKiosk}
            />
          )
        })
      )}
    </Wrap>
  )
}

export default KiosksContainer
