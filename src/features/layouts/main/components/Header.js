import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import HeaderLogo from "./HeaderLogo"
import FixedNav from "./FixedNav"

const Header = () => {
  return (
    <Box
      as="header"
      h="7rem"
      position="sticky"
      top="0"
      zIndex="30"
      overflow="hidden"
      bg="brand.yellow"
      maxW="1750px"
      m="0 auto"
    >
      <Flex as="div" m="0 auto" h="100%" maxW="1750px" align="center">
        <HeaderLogo />
        <FixedNav />
      </Flex>
    </Box>
  )
}

export default Header
