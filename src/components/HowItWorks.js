import React from "react"
import {
  Grid,
  GridItem,
  Text,
  Heading,
  Box,
  Center,
  Icon,
} from "@chakra-ui/react"
import {
  GiStraightPipe,
  GiValve,
  GiLargePaintBrush,
  GiAbstract082,
  GiAbstract070,
  GiBrickWall,
  GiHammerNails,
} from "react-icons/gi"

const HowItWorks = () => {
  return (
    <Box w="100%" pb="1rem">
      <Center
        m={["1rem 0.5rem", "1rem auto"]}
        maxW="800px"
        flexDir="column"
        // color="white"
      >
        <Center m="2rem 0">
          <Heading as="h1" size="xl">
            Líneas y Productos
          </Heading>
        </Center>

        <Grid templateColumns={["0.2fr 2fr", "0.3fr 2fr"]} gap={4}>
          <NumberGridItem number={GiStraightPipe} />
          <TextGridItem>Tuberías y Accesorios de PVC</TextGridItem>

          <NumberGridItem number={GiValve} />
          <TextGridItem>Abastos, Acoples, Válvulas y Griferias</TextGridItem>

          <NumberGridItem number={GiAbstract070} />
          <TextGridItem>
            Tejas en fibrocemento, Policarbonato, Plásticas y Polipropileno
          </TextGridItem>

          <NumberGridItem number={GiBrickWall} />
          <TextGridItem>
            Sistema liviano drywall y Superboard, Perfileria, Cintas, Masilla,
            Tornilleria
          </TextGridItem>

          <NumberGridItem number={GiLargePaintBrush} />
          <TextGridItem>
            Pinturas, Brochas, Rodillos, Impermeabilizantes
          </TextGridItem>

          <NumberGridItem number={GiAbstract082} />
          <TextGridItem>
            Lavaplatos en acero, Rejillas Metálicas y PVC
          </TextGridItem>

          <NumberGridItem number={GiHammerNails} />
          <TextGridItem>Clavo común y en acero</TextGridItem>

          {/* <GridItem
            colSpan={2}
            ml="2rem"
            mt="0.5rem"
            borderTop="1px solid black"
          >
            <Text fontSize="xs">* Costo parrillero $ 30mil x hora</Text>
            <Text fontSize="xs">
              * Carbón y utencilios para el asado incluidos
            </Text>
            <Text fontSize="xs">
              * No está permitido el ingreso de comida ni bebidas
            </Text>
          </GridItem> */}
        </Grid>
      </Center>
    </Box>
  )
}

export default HowItWorks

export const NumberGridItem = ({ number }) => (
  <GridItem
    border="1px solid white"
    borderRadius="50%"
    w="50px"
    h="50px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    m="auto"
  >
    <Icon as={number} boxSize="2rem" mx="1rem" />
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
