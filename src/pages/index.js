import React from "react"
import { Box, Heading, Center } from "@chakra-ui/react"
import SEO from "../components/seo"
import HowItWorks from "../features/home/HowItWorks"
import About from "../features/home/About"
import ImgCarousel from "../components/ImgCarousel"
import GoogleMap from "../features/home/GoogleMap"
import Hero from "../components/Hero"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const IndexPage = () => {
  const breakpoints = useBreakpoint()
  const desktopArray = [
    { src: "s1.jpg", alt: "foto" },
    { src: "s2.jpg", alt: "foto" },
    { src: "s3.jpg", alt: "foto" },
    { src: "s4.jpg", alt: "foto" },
    { src: "s5.jpg", alt: "foto" },
    { src: "s6.jpg", alt: "foto" },
  ]
  const mobileArray = [
    { src: "v1.jpg", alt: "foto" },
    { src: "v2.jpg", alt: "foto" },
    { src: "v3.jpg", alt: "foto" },
    { src: "v4.jpg", alt: "foto" },
    { src: "v5.jpg", alt: "foto" },
    { src: "v6.jpg", alt: "foto" },
  ]
  return (
    <>
      <SEO title="Inicio" />
      {breakpoints.sm ? (
        <ImgCarousel array={mobileArray} />
      ) : (
        <ImgCarousel array={desktopArray} />
      )}
      <About />
      <Box m={["2rem auto", "4rem auto 2rem auto"]} w="100%" maxW="800px">
        <Center>
          <Heading as="h1" size="xl">
            Nuestros Aliados
          </Heading>
        </Center>
        <Hero src="Frame 1.jpg" alt="Logos marcas aliadas" m="2.5rem auto" />
      </Box>
      <HowItWorks />
      <GoogleMap />
    </>
  )
}

export default IndexPage
