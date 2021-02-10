import React from "react"
import { Box, SimpleGrid, Center , Heading} from "@chakra-ui/react"
import Image from "./Image"

const Pictures = () => {
  return (
    <Box m="2rem auto">
    <Center>
      <Heading as="h1" size="xl">Otros Servicios</Heading>
    </Center>
    <SimpleGrid columns={[1, null, 2]} spacing={3} maxW="700px" m="2rem auto">
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

export default Pictures

export const ImageContainer = ({ src, alt }) => (
  <Center>
    <Box h="320px" w="320px" overflow="hidden" m={["0 auto", "0 0.5rem"]} >
      <Image src={src} alt={alt} />
    </Box>
  </Center>
)
