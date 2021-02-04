import React from "react"
import SEO from "../components/seo"
import Image from '../components/Image'
import { Button, Center, Heading } from "@chakra-ui/react"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Image src="gatsby-astronaut.png" alt="Imagen de restaurante"/>
      <Heading as="h1" size="2xl" my={3}>
        Index
      </Heading>
    </>
  )
}

export default IndexPage
