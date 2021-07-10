import React from "react"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { Box, Text, Center } from "@chakra-ui/react"

const ConocenosPage = () => {
  return (
    <>
      <SEO title="conócenos" />
      <Hero text="Conócenos" src="s4.jpg" alt="foto" />
      <Box m="2rem auto" maxW="1100px">
        <Center m={["1.5rem 0.8rem"]} flexDir="column">
          <Text fontSize={[null, "2xl"]}>
            Buho es un concepto de restaurante campestre especializado en asados
            y parrilla. Esta conformado por kioskos con capacidad entre 8 - 10
            personas.
          </Text>
          <Text fontSize={[null, "2xl"]}>
            Es un sitio ideal para compartir con familia y amigos con un buen
            asado y en el mejor ambiente campestre de la ciudad
          </Text>
        </Center>
      </Box>
    </>
  )
}

export default ConocenosPage
