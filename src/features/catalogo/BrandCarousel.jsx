import React from "react"
import { Box } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import FetchedImage from "../../components/FetchedImage"

export default function BrandCarousel({ gallery }) {
  return (
    <Box w="100%" maxW="1750px" margin="2rem auto">
      <Carousel
        autoPlay={true}
        swipeable={true}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        centerMode={false}
        interval={5000}
      >
        {gallery.map((image, index) => {
          return (
            <Box
              key={index}
              h={["300px", "400px", "500px", "650px"]}
              w={["100%", '80%', '50%']}
              overflow="hidden"
              mx='auto'
            >
              <FetchedImage
                src={image}
                alt="imagen"
                gatsbyImageData="gatsbyImageData(placeholder: DOMINANT_COLOR, height:500)"
              />
            </Box>
          )
        })}
      </Carousel>
    </Box>
  )
}
