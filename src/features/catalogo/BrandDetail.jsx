import React from "react"
import { Box, Heading, Center } from "@chakra-ui/react"
import FetchedImage from "../../components/FetchedImage"
import BrandCarousel from "./BrandCarousel"
import BrandCategories from "./BrandCategories"

export default function BrandDetail({ data }) {
  const { frontmatter } = data
  return (
    <Box display="flex" flexDir="column" justifyContent="center">
      <Box
        maxW="1750px"
        w={["100%"]}
        h="150px"
        overflow="hidden"
        display="flex"
        justifyContent="center"
      >
        <FetchedImage
          src={frontmatter.brandLogo}
          alt="logo"
          gatsbyImageData="gatsbyImageData(placeholder: DOMINANT_COLOR, height: 200)"
        />
      </Box>
      <Center my={["1rem", "2rem"]} flexDir="column" mx="auto">
        <Heading as="h1" size="xl">
          {frontmatter.title}
        </Heading>
      </Center>
      <BrandCategories categories={frontmatter.categories} />
      <BrandCarousel gallery={frontmatter.gallery} />
    </Box>
  )
}
