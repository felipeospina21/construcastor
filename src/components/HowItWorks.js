import React from "react"
import {
  Grid,
  GridItem,
  Text,
  Heading,
  Box,
  Center,
} from "@chakra-ui/react"

const HowItWorks = () => {
  return (
    <Center m="1rem auto" maxW="800px" flexDir="column">
      <Center m="2rem 0">
        <Heading as="h1" size="xl" >
          ¿Cómo Funciona?
        </Heading>
      </Center>

      <Grid templateColumns={["0.2fr 2fr", "0.3fr 2fr"]} gap={4}>
        <NumberGridItem number={1} />
        <TextGridItem>Reserva tu kiosco</TextGridItem>

        <NumberGridItem number={2} />
        <TextGridItem>
          Selecciona si desdeas preparar tu asado tú mismo o contratar a uno de
          nuestros parrilleros especializados
        </TextGridItem>

        <NumberGridItem number={3} />
        <TextGridItem>Escoge los combos que deseas preparar</TextGridItem>

        <NumberGridItem number={4} />
        <TextGridItem>
          Nosotros incluimos el carbon y los utencilios para preparar el asado
        </TextGridItem>

        <NumberGridItem number={5} />
        <TextGridItem>
          Disfruta con tu familia y amigos de un espacio campestre y un buen
          asado
        </TextGridItem>
      </Grid>
    </Center>
  )
}

export default HowItWorks

export const NumberGridItem = ({ number }) => (
  <GridItem
    border="1px solid black"
    borderRadius="50%"
    w="50px"
    h="50px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    m="auto"
  >
    <Text margin="auto" fontSize="2xl">
      {number}
    </Text>
  </GridItem>
)

export const TextGridItem = ({ children }) => (
  <GridItem
    display="flex"
    alignItems="center"
    p=" 2px 1px"
    borderTop="1px solid black"
  >
    <Text fontSize={["xl", "2xl"]}>{children}</Text>
  </GridItem>
)
