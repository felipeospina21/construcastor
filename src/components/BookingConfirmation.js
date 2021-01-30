import React from "react"
import {
  Container,
  Heading,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

const BookingConfirmation = ({
  bookingDate,
  bookingTime,
  bookingKiosk,
  setBooking,
}) => {
  const bookingYear = bookingDate.getFullYear()
  const bookingMonth = bookingDate.getMonth() + 1
  const bookingDay = bookingDate.getDate()
  const stringDate = `${bookingDay}/${bookingMonth}/${bookingYear}`
  return (
    <Container>
      <Heading as="h4">Fecha de reserva</Heading>
      <p>{stringDate}</p>
      <Heading as="h4">Hora de reserva</Heading>
      <p>{bookingTime}</p>
      <Heading as="h4">Kiosko seleccionado</Heading>
      <p> Kiosko # {bookingKiosk}</p>

      <FormControl id="first-name" isRequired>
        <FormLabel>Nombre</FormLabel>
        <Input placeholder="Ingrese su nombre" />
      </FormControl>

      <FormControl id="last-name" isRequired>
        <FormLabel>Apellidos</FormLabel>
        <Input placeholder="Ingrese sus apellidos" />
      </FormControl>

      <FormControl id="phone-number" isRequired>
        <FormLabel>Celular</FormLabel>
        <Input placeholder="Ingrese su celular" />
      </FormControl>

      <Center my={10}>
        <Button onClick={() => setBooking()}>Confirmar Reserva</Button>
      </Center>
    </Container>
  )
}

export default BookingConfirmation
