import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import Reservation from "../components/Reservation"
import SEO from "../components/seo"

import "react-datepicker/dist/react-datepicker.css"

const IndexPage = () => {
  const [startDate, setStartDate] = useState(null)
  const [bookingTime, setBookingTime] = useState()
  const [availableTimes, setAvailableTimes] = useState([])
  const schedules = ["10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"]

  useEffect(()=>{
    getAvailableTimes()
  },[])

  const getAvailableTimes = async () => {
    firebase
    .firestore()
    .collection("bookings")
    .onSnapshot(querySnapshot => {
      const docs = []
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      
      docs.forEach(doc=>{console.log(new Date(doc.bookinkInfo.bookingDate))})

      const filteredDocs= docs.filter(doc=>doc.date === startDate)
      setAvailableTimes(filteredDocs)
   

    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        showDisabledMonthNavigation
      />

      <div>
        {schedules.map(schedule => (
          <button key={schedule} onClick={()=>setBookingTime(schedule)}>{schedule}</button>
        ))}
      </div>

      <Reservation dateSelected={startDate} timeSelected={bookingTime}/>
    </Layout>
  )
}

export default IndexPage
