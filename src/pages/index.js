import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import Kiosks from "../components/Kiosks"
import SEO from "../components/seo"

import "react-datepicker/dist/react-datepicker.css"

const IndexPage = () => {
  const [bookingDate, setBookingDate] = useState(new Date())
  const [bookingTime, setBookingTime] = useState()
  const [bookings, setBookings] = useState([])
  const schedules = ["10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"]

  useEffect(()=>{
    getAvailableTimes()
  },[bookingDate])

  const getAvailableTimes = async () => {
    firebase
    .firestore()
    .collection("bookings")
    .onSnapshot(querySnapshot => {
      const docs = []
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })

      const filteredDocs= docs.filter(doc=>(doc.bookingInfo.bookingDate.seconds * 1000) === bookingDate.getTime())
      setBookings(filteredDocs)

    })
  }

  const setSelectedDate = (date)=>{
    date.setHours(0,0,0)
    setBookingDate(date)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <h4>Seleccione fecha de reserva</h4>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={bookingDate}
        onChange={date => setSelectedDate(date)}
        minDate={new Date()}
        showDisabledMonthNavigation
      />

      <div>
        {schedules.map(schedule => (
          <button key={schedule} onClick={()=>setBookingTime(schedule)}>{schedule}</button>
        ))}
      </div>

      <Kiosks dateSelected={bookingDate} timeSelected={bookingTime} bookings={bookings}/>
    </Layout>
  )
}

export default IndexPage
