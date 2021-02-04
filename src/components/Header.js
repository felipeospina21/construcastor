import { Box, Flex, Center, Link, Text } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../assets/buho-logo-1.svg"
import React from "react"

const Header = () => (
  <Box as="header" background="brand.green" h="5rem">
    <Flex as="div" m="0 auto" h="100%" maxW="960px">
      <Center w="20%" m="0">
        <Link as={GatsbyLink} to="/">
          <Logo />
        </Link>
      </Center>
      <Center w="70%" m="0">
        <Link
          as={GatsbyLink}
          to="/reservas"
          color="black"
        >
          <Text fontSize="xl">Reservas</Text>
        </Link>
      </Center>
    </Flex>
  </Box>
)

export default Header
