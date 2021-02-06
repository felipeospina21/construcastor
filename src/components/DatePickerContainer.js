import React from "react"
import DatePicker from "react-datepicker"
import { Container, Heading } from "@chakra-ui/react"

import "react-datepicker/dist/react-datepicker.css"

const DatePickerContainer = ({
  bookingDate,
  setBookingDate,
  setBookingTime,
}) => {
  const setSelectedDate = date => {
    date.setHours(0, 0, 0)
    setBookingDate(date)
    setBookingTime()
  }
  return (
    <Container bg="brand.green" maxW="1300px" mx={0} p={4} color="black">
      <Heading as="h4" size="sm" my={2}>
        Seleccione fecha de reserva
      </Heading>

      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={bookingDate}
        onChange={date => setSelectedDate(date)}
        minDate={new Date()}
        showDisabledMonthNavigation
      />
    </Container>
  )
}

export default DatePickerContainer
