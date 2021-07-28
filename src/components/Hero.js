import React from "react"
import Image from "../components/Image"
import { Box } from "@chakra-ui/react"

const Hero = ({ src, alt }) => {
  return (
    <Box m="2.5rem auto">
      <Image src={src} alt={alt} />
    </Box>
  )
}

export default Hero
