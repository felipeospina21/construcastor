import React from "react"
import ContactInfo from "./ContactInfo"

import { Grid, Box } from "@chakra-ui/react"
import OpenHours from "./OpenHours"
import Social from "./Social"

const Footer = () => {
  return (
    <Box
      as="footer"
      background="brand.green"
      fontSize="sm"
      p={["0.5rem", "1rem"]}
    >
      <Box maxW="500px" m="auto">
        <Grid templateColumns="1fr 0.5fr" gap={3}>
          <OpenHours />
          <Social />
        </Grid>
        <ContactInfo />
      </Box>
    </Box>
  )
}

export default Footer
