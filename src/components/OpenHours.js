import React from "react"
import { Text, Center, GridItem } from "@chakra-ui/react"

const OpenHours = () => {
  return (
    <GridItem>
      {/* <Center flexDir="column" h="100%"> */}
        <Text>Horario</Text>
        <Text>Jueves a Sábado: 12pm - 12am</Text>
        <Text>Domingos: 12pm - 8pm</Text>
      {/* </Center> */}
    </GridItem>
  )
}

export default OpenHours
