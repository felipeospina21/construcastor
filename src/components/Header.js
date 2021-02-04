import React from "react"
import NavLinks from "./NavLinks"
import { Box, Flex } from "@chakra-ui/react"
import HeaderLogo from "./HeaderLogo"

const Header = () => (
  <Box as="header" background="brand.green" h="4.5rem">
    <Flex as="div" m="0 auto" h="100%" maxW="1800px">
      <HeaderLogo />
      <NavLinks />
    </Flex>
  </Box>
)

export default Header
