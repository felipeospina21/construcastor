import React from "react"
import { Center, Heading } from "@chakra-ui/react"

const FixedNav = () => {
  return (
    <Center w={["100%", "400px"]} flexDir="column">
      <Heading as="h1" size="xl" color="brand.blue">
        CONSTRUCASTOR
      </Heading>
      <Heading as="h2" size="m" color="brand.blue">
        Su mejor proveedor
      </Heading>
    </Center>
  )
}

export default FixedNav
