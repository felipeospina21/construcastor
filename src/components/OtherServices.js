import React from "react"
import { Box, SimpleGrid, Center, Heading, Text } from "@chakra-ui/react"
import Image from "./Image"

const OtherServices = () => {
  return (
    <Box m="2rem auto" maxW="1300px">
      <Center flexDir="column">
        <Heading as="h1" size="xl" mb="1rem">
          Otros Servicios
        </Heading>
        <Text>
          También ofrecemos otros servicios de diversión adicionales para que
          todos los miembros de tu familia se puedan divertir
        </Text>
      </Center>
      <SimpleGrid columns={[1, null, 2, 3, 4]} spacing={2} m="2rem auto">
        <ImageContainer src="1.jpg" alt="imagen" />
        <ImageContainer src="2.jpg" alt="imagen" />
        <ImageContainer src="3.jpg" alt="imagen" />
        <ImageContainer src="4.jpg" alt="imagen" />
        <ImageContainer src="5.jpg" alt="imagen" />
        <ImageContainer src="6.jpg" alt="imagen" />
        <ImageContainer src="7.jpg" alt="imagen" />
      </SimpleGrid>
    </Box>
  )
}

export default OtherServices

export const ImageContainer = ({ src, alt }) => (
  <Center>
    <Box h="320px" w="320px" overflow="hidden">
      <Image src={src} alt={alt} />
    </Box>
  </Center>
)
