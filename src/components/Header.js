import { Box, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import Logo from '../assets/buho-logo.svg'
import React from "react"

const Header = () => (
  <Box as="header" background="brand.green" h="10rem">
    <Box as="div" m="0 auto" h="100%" maxW="960px" p="0 1.0875rem">
      
        <Link
          as={GatsbyLink}
          to="/"
          color="white"
          _hover={{ textDecor: "none" }}
        >
          <Box w="20%" h="10rem" m="0">
            <Logo/>
          </Box>
        </Link>
    
    </Box>
  </Box>
)

export default Header