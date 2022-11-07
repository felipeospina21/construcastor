import React from "react"
import { Box, Center, Heading, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const FixedNav = () => {
  return (
    <Center w={["100%"]} flexDir="column">
      <Heading as="h1" size="xl" color="brand.blue">
        CONSTRUCASTOR
      </Heading>
      <Heading as="h2" size="xs" color="brand.blue">
        Su mejor proveedor
      </Heading>
      <Box
        display="flex"
        justifyContent={["flex-start", "center"]}
        w={["100%", "50%"]}
        m="1rem 0 0.3rem 0"
      >
        <CustomLink to="/">Inicio</CustomLink>
        <CustomLink to="/catalogo">Catálogo</CustomLink>
      </Box>
    </Center>
  )
}

export default FixedNav

function CustomLink({ children, to }) {
  return (
    <Link
      as={GatsbyLink}
      to={to}
      textDecor="underline"
      color="brand.blue"
      fontWeight="semibold"
      mx="1rem"
    >
      {children}
    </Link>
  )
}
