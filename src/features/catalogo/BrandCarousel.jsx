import React from "react"
import { Box } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import FetchedImage from "../../components/FetchedImage"

export default function BrandCarousel({ gallery }) {
  return (
    <Box w="100%" maxW="1750px" margin="2rem auto">
      <Carousel
        autoPlay="true"
        showArrows={false}
        showStatus={false}
        centerMode={false}
        swipeable={true}
        infiniteLoop="true"
        interval={5000}
      >
        {gallery.map((image, index) => {
          return (
            <Box
              key={index}
              h={["300px", "400px", "500px", "650px"]}
              w="100%"
              overflow="hidden"
            >
              <FetchedImage
                src={image}
                alt="imagen"
                gatsbyImageData="gatsbyImageData(placeholder: DOMINANT_COLOR, width:900)"
              />
            </Box>
          )
        })}
      </Carousel>
    </Box>
  )
}
