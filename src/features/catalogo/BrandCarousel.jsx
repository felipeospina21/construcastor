import React from "react"
import { Box } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import FetchedImage from "../../components/FetchedImage"

export default function BrandCarousel({ gallery }) {
  return (
    <Box
      w={["100%", "80%", "50%"]}
      maxW="1750px"
      margin={["2rem auto", "4rem auto 1rem auto"]}
      backgroundColor='gray.800'
    >
      <Carousel
        autoPlay={true}
        swipeable={true}
        infiniteLoop={true}
        centerMode={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        stopOnHover
        interval={3000}
      >
        {gallery.map((image, index) => {
          return (
            <Box
              key={index}
              w={["100%", "80%", "50%"]}
              overflow="hidden"
              mx="auto"
            >
              <FetchedImage
                src={image}
                alt="imagen"
                objectFit='contain'
                gatsbyImageData="gatsbyImageData(placeholder: DOMINANT_COLOR, height:500)"
              />
            </Box>
          )
        })}
      </Carousel>
    </Box>
  )
}
