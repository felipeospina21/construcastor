import React from "react"
import { Text, GridItem } from "@chakra-ui/react"

const OpenHours = () => {
  return (
    <GridItem>
      <Text fontWeight="bold">Horario</Text>
      <Text>Lunes a Viernes: 7:30am - 5:00pm</Text>
      <Text>Sábados: 7:30am - 1:30pm</Text>
    </GridItem>
  )
}

export default OpenHours
