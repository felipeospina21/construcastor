import React from "react"
import SEO from "../components/seo"
import Image from "../components/Image"
import HowItWorks from '../components/HowItWorks'
import { Box } from "@chakra-ui/react"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Box w="100%" maxH="80vh" maxW="1800px" overflow="hidden">
        <Image src="panoramica_auto.jpg" alt="Imagen de restaurante" />
      </Box>
      <HowItWorks/>
    </>
  )
}

export default IndexPage
