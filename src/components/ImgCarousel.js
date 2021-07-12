import { Box, Heading, Center } from "@chakra-ui/react"
import React, { useState } from "react"
import Slide from "./Slide"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImgCarousel = () => {
  const [slides] = useState([
    { src: "v1.jpg", alt: "foto" },
    { src: "v2.jpg", alt: "foto" },
    { src: "v3.jpg", alt: "foto" },
    { src: "v4.jpg", alt: "foto" },
    { src: "v5.jpg", alt: "foto" },
    { src: "v6.jpg", alt: "foto" },
  ])
  return (
    <Box w="100%" maxW="1300px" margin="2rem auto">
      <Center mb="2rem">
        <Heading as="h1" size="xl">
          CONSTRUCASTOR
        </Heading>
      </Center>
      <Carousel
        autoPlay="true"
        showArrows={false}
        showStatus={false}
        centerMode={false}
        swipeable={true}
        infiniteLoop="true"
        interval={5000}
      >
        {slides.map(slide => {
          const { src, alt } = slide
          return <Slide src={src} alt={alt} />
        })}
      </Carousel>
    </Box>
  )
}

export default ImgCarousel
