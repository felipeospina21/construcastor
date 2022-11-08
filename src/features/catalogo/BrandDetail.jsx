import React from "react"
import { Box, Heading, Center } from "@chakra-ui/react"
import FetchedImage from "../../components/FetchedImage"
import BrandCarousel from "./BrandCarousel"
import BrandCategories from "./BrandCategories"

export default function BrandDetail({ data }) {
  const { frontmatter: {brandLogo, title, categories, gallery} } = data
  return (
    <Box display="flex" flexDir="column" justifyContent="center">
      <Box
        maxW="1750px"
        w={["100%"]}
        h="200px"
        mt='1rem'
        overflow="hidden"
        display="flex"
        justifyContent="center"
      >
        <FetchedImage
          src={brandLogo}
          alt="logo"
          gatsbyImageData="gatsbyImageData(placeholder: DOMINANT_COLOR, height: 200)"
        />
      </Box>
      <Center my={["1rem", "2rem"]} flexDir="column" mx="auto">
        <Heading as="h1" size="xl">
          {title}
        </Heading>
      </Center>
      <BrandCategories categories={categories} />
      {gallery?.length ? <BrandCarousel gallery={gallery} /> : <Box h={['100px',null, '200px','500px']}/>}
    </Box>
  )
}
