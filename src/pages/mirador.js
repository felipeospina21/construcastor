import React from "react"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { Box, Text, Center } from "@chakra-ui/react"

const MiradorPage = () => {
  return (
    <>
      <SEO title="mirador búho" />
      <Hero text="Mirador Búho" src="s7.jpg" alt="foto del mirador de búho" />
      <Box>
        <Center m="2rem auto" flexDir="column" maxW="1100px">
          <Center m="0 0.8rem" flexDir="column">
            <Text fontSize={[null, "2xl"]}>
              Estamos al lado de Búho, pero somos otro parche.
            </Text>
            <Text fontSize={[null, "2xl"]}>
              Cerveza, amigos, cocteles, buena música y ¡LA MEJOR VISTA DE LA
              CIUDAD!. Nuestro Mirador Búho, es un espacio increible para
              disfrutar con tus amigos y compartir momentos agradables, todo en
              un lugar mágico, inmerso en medio de un bosque.
            </Text>
          </Center>
        </Center>
      </Box>

      <Box m={["1rem", null, null, "2rem"]}></Box>
    </>
  )
}

export default MiradorPage
