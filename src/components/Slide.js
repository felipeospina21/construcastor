import React from "react"
import Image from "./Image"
import { Box } from "@chakra-ui/react"

const Slide = ({ src, alt }) => {
  return (
    <Box h={["300px", "400px", "500px", "650px"]} w="100%">
      <Image src={src} alt={alt} />
    </Box>
  )
}

export default Slide
