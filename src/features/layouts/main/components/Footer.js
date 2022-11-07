import React from "react"
import ContactInfo from "./ContactInfo"
import OpenHours from "./OpenHours"
import Social from "./Social"
import { Grid, Box, Center } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        fontSize="sm"
        p={["0.5rem", "1rem"]}
        bg="brand.yellow"
        maxW="1850px"
        m="0 auto"
      >
        <Box maxW="500px" m="auto">
          <Grid
            templateColumns={["1fr 0.5fr", "1fr 0.3fr"]}
            rowGap={5}
            columnGap={2}
          >
            <OpenHours />
            <ContactInfo />
          </Grid>
        </Box>
      </Box>
      <Center fontSize="xs" m="0.5rem" flexDir="column">
        <Social />
        Creado por Felipe Ospina
      </Center>
    </>
  )
}

export default Footer
