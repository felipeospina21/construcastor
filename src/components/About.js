import React from "react"
import { Heading, Text, Center } from "@chakra-ui/react"

const About = () => {
  return (
    <Center m={["2rem auto", "3rem auto"]} flexDir="column" maxW="1100px">
      <Heading as="h1" size="xl">
        Conócenos
      </Heading>
      <Center m={["1.5rem 0.8rem 0 0.8rem"]} flexDir="column">
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
      </Center>
    </Center>
  )
}

export default About
