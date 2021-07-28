import { Box } from "@chakra-ui/react"
import React from "react"
import Slide from "./Slide"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImgCarousel = ({ array }) => {
  return (
    <Box w="100%" maxW="1750px" margin="0 auto">
      <Carousel
        autoPlay="true"
        showArrows={false}
        showStatus={false}
        centerMode={false}
        swipeable={true}
        infiniteLoop="true"
        interval={5000}
      >
        {array.map((slide, index) => {
          const { src, alt } = slide
          return <Slide key={index} src={src} alt={alt} />
        })}
      </Carousel>
    </Box>
  )
}

export default ImgCarousel
