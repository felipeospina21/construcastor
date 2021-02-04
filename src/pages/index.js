import React from "react"
import SEO from "../components/seo"
import { Button, Center, Heading } from "@chakra-ui/react"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Heading as="h1" size="2xl" my={3}>
        Index
      </Heading>
    </>
  )
}

export default IndexPage
