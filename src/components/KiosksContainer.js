import React, { useState, useEffect } from "react"
import Kiosk from "./Kiosk"
import { Wrap, Center, Heading } from "@chakra-ui/react"

const KiosksContainer = ({
  setBookingKiosk,
  timeSelected,
  bookings,
  kioskosInfo,
}) => {
  const [kiosks, setKiosks] = useState([])
  const [bookedKiosks, setBookedKiosks] = useState([])

  useEffect(() => {
    getKioskInfo()
    getFilteredKiosks()
  }, [timeSelected])

  const getKioskInfo = () => setKiosks(kioskosInfo.allKioskos.edges)

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

  const renderKiosks = kiosks.filter(
    kiosk => !bookedKiosks.includes(kiosk.node.id)
  )

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
              key={kiosk.node.id}
              kiosk={kiosk.node}
              setBookingKiosk={setBookingKiosk}
            />
          )
        })
      )}
    </Wrap>
  )
}

export default KiosksContainer
