import React from "react"
import { Box, Button, Center, WrapItem, Heading } from "@chakra-ui/react"

const Kiosk = ({ kiosk, setBookingKiosk }) => {
  return (
    <WrapItem p={2} my={5} mx={2} w="200px" border="1px solid black">
      <Box key={kiosk.id}>
        <Heading as="h3" size="lg">
          Kiosko # {kiosk.id}
        </Heading>
        <Heading as="h5" size="md" mt={2}>
          Capacidad:
        </Heading>
        <p>{kiosk.capacity} personas</p>
        <Center mt={10}>
          <Button onClick={() => setBookingKiosk(kiosk.id)}>seleccionar</Button>
        </Center>
      </Box>
    </WrapItem>
  )
}

export default Kiosk
