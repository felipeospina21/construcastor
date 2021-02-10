import React from "react"
import ContactInfo from './ContactInfo'

import { Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box
      as="footer"
      background="brand.green"
      h="4.5rem"
      overflow="hidden"
    >
      <ContactInfo/>
    </Box>
  )
}

export default Footer
