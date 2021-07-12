import React from "react"
import { Box, Heading, Center } from "@chakra-ui/react"
import SEO from "../components/seo"
import HowItWorks from "../components/HowItWorks"
import About from "../components/About"
import OtherServices from "../components/OtherServices"
import ImgCarousel from "../components/ImgCarousel"
import GoogleMap from "../components/GoogleMap"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <>
      <SEO title="Inicio" />
      <ImgCarousel />
      <About />
      <Box m="2rem auto">
        <Center>
          <Heading as="h1" size="xl">
            Algunas de nuestras marcas
          </Heading>
        </Center>
        <Hero src="Frame 1.png" alt="Logos marcas aliadas" />
      </Box>

      {/* <HowItWorks /> */}

      {/* <OtherServices /> */}
      <GoogleMap />
    </>
  )
}

export default IndexPage
