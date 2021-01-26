import React, { useState } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

const DatePickerContainer = () => {
  const [startDate, setStartDate] = useState(new Date())
  const schedules = ['10am-12pm', '12pm-2pm', '2pm-4pm', '4pm-6pm']

  const onSelectDate = (date)=>{
    setStartDate(date)
    console.log(`date ${date} selected`)
  }

  return (
    <DatePicker selected={startDate} onChange={date => onSelectDate(date)} />
  )
}

export default DatePickerContainer
