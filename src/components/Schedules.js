import React from "react"
import { Box, Button, Container, Heading } from "@chakra-ui/react"

const Schedules = ({ setBookingTime }) => {
  const schedules = ["10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"]

  return (
    <Container mx={0} my={6}>
      <Heading as="h4" size="sm">
        Seleccione la hora
      </Heading>
      {schedules.map(schedule => (
        <Button
          mt={1}
          mr={2}
          key={schedule}
          onClick={() => setBookingTime(schedule)}
        >
          {schedule}
        </Button>
      ))}
    </Container>
  )
}

export default Schedules
