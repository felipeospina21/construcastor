import React from "react"
import { Box, Heading, Text, Center } from "@chakra-ui/react"

const About = () => {
  return (
    <Center m="1rem auto 0.5rem auto" flexDir="column">
      <Heading as="h1" size="xl">
        Concepto
      </Heading>
      <Center m={["1.5rem 0.8rem 0 0.8rem", "1.5rem auto"]} flexDir="column">
        <Text>
          Buho es un concepto de restaurante campestre especializado en asados y
          parrilla. Esta conformado por kioskos con capacidad entre 8 - 10
          personas.
        </Text>
        <Text>
          Es un sitio ideal para compartir con familia y amigos con un buen
          asado y en el mejor ambiente campestre de la ciudad
        </Text>
      </Center>
    </Center>
  )
}

export default About
