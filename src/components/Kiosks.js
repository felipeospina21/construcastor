import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"

const Kiosks = ({ dateSelected, timeSelected, bookings }) => {
  const [kiosks, setKiosks] = useState([])
  const [kioskSelected, setKioskSelected] = useState()
  const [filteredKiosks, setFilteredKiosks] = useState([])

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
    const newFilteredKiosks = []
    const filteredBookingsByTime = bookings.filter(
      booking => booking.bookingInfo.bookingTime === timeSelected
    )
    filteredBookingsByTime.forEach(filteredBooking => {
      newFilteredKiosks.push(filteredBooking.bookingInfo.bookingKiosk)
    })
    setFilteredKiosks(newFilteredKiosks)
  }

  const setBooking = async () => {
    const times = []
    bookings.forEach(time => {
      times.push(
        `${time.bookingInfo.bookingTime}${time.bookingInfo.bookingKiosk}`
      )
    })

    if (!times.includes(`${timeSelected}${kioskSelected}`)) {
      firebase
        .firestore()
        .collection("bookings")
        .doc()
        .set({
          bookingInfo: {
            bookingDate: dateSelected,
            bookingTime: timeSelected,
            bookingKiosk: kioskSelected,
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

  const renderKiosks = kiosks.filter(
    kiosk => !filteredKiosks.includes(kiosk.id)
  )

  return (
    <div>
      {renderKiosks.map(kiosk => {
        return (
          <div key={kiosk.id}>
            <h4>Kiosko # {kiosk.id}</h4>
            <p>Capacidad: {kiosk.capacity} personas</p>
            <button onClick={() => setKioskSelected(kiosk.id)}>
              seleccionar
            </button>
          </div>
        )
      })}

      <button onClick={() => setBooking()}>save</button>
    </div>
  )
}

export default Kiosks
