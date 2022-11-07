import React from "react"
import { Heading, Text, Center, Box } from "@chakra-ui/react"

const About = () => {
  return (
    <Center m={["2rem auto", "3rem auto"]} flexDir="column" maxW="1100px">
      <Heading as="h1" size="xl">
        Conócenos
      </Heading>
      <Box
        m={["1.5rem 0.5rem 0 0.5rem", null, null, "1.5rem auto 0 auto"]}
        maxW="900px"
      >
        <Text fontSize={[null, "2xl"]}>
          Construcastor es un negocio dedicado a la venta de materiales
          relacionados con la construcción. Nos especializamos en tuberías y
          accesorios de PVC, tejas en diferentes materiales y ferreteria
          liviana.
        </Text>
        <Text fontSize={[null, "2xl"]}>
          Contamos con personal especializado para brindar asesoría y ayudarte
          en tu elección.
        </Text>
      </Box>
    </Center>
  )
}

export default About
