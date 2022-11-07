import React from "react"
import Image from "../components/Image"
import { Box } from "@chakra-ui/react"

const Hero = ({ src, alt, ...rest }) => {
  return (
    <Box {...rest}>
      <Image src={src} alt={alt} />
    </Box>
  )
}

export default Hero
