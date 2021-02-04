import React from "react"
import firebase from "gatsby-plugin-firebase"
import { Formik, Field, Form } from "formik"
import { FiPhone } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"
import {
  Container,
  Heading,
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react"

const BookingConfirmation = ({
  bookingDate,
  bookingTime,
  bookingKiosk,
  bookings,
}) => {
  const bookingYear = bookingDate.getFullYear()
  const bookingMonth = bookingDate.getMonth() + 1
  const bookingDay = bookingDate.getDate()
  const stringDate = `${bookingDay}/${bookingMonth}/${bookingYear}`
  const toast = useToast()

  return (
    <Container>
      <Heading as="h4">Fecha de reserva</Heading>
      <p>{stringDate}</p>
      <Heading as="h4">Hora de reserva</Heading>
      <p>{bookingTime}</p>
      <Heading as="h4">Kiosko seleccionado</Heading>
      <p> Kiosko # {bookingKiosk}</p>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
        }}
        onSubmit={async (values, actions) => {
          await new Promise(r => {
            const times = []
            const { firstName, lastName, phoneNumber } = values
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
                    firstName,
                    lastName,
                    phoneNumber,
                  },
                })
                .then(function () {
                  console.log("Document successfully written!")
                  toast({
                    title: "Reserva Exitosa",
                    description: "Hemos reservado tu kiosko.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                  actions.setSubmitting(false)
                })
                .catch(function (error) {
                  console.error("Error writing document: ", error)
                })
            } else {
              console.log("El horario escogido ya se encuentra reservado")
            }
          })
        }}
      >
        {props => (
          <Form>
            <Field name="firstName">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="first-name">Nombre</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={BsPerson} color="gray.300" />}
                    />
                    <Input
                      {...field}
                      id="first-name"
                      pattern="[a-zA-Z ]*$"
                      placeholder="Ingrese su nombre"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </InputGroup>
                </FormControl>
              )}
            </Field>

            <Field name="lastName">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="last-name">Apellidos</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={BsPerson} color="gray.300" />}
                    />
                    <Input
                      {...field}
                      id="last-name"
                      pattern="[a-zA-Z ]*$"
                      placeholder="Ingrese sus apellidos"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </InputGroup>
                </FormControl>
              )}
            </Field>

            <Field name="phoneNumber" type="tel">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="phone">Celular</FormLabel>
                  <FormHelperText>
                    * Sin indicativo país, ni caracteres especiales
                  </FormHelperText>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={FiPhone} color="gray.300" />}
                    />
                    <Input
                      {...field}
                      id="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Ingrese su celular"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </InputGroup>
                </FormControl>
              )}
            </Field>

            <Center my={10}>
              <Button
                type="submit"
                loadingText="Enviando"
                isLoading={props.isSubmitting}
              >
                Confirmar Reserva
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default BookingConfirmation
