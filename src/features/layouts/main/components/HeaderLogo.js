import React from "react"
import { Icon, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../../../../assets/logo-castor.svg"

const HeaderLogo = () => {
  return (
    <Link as={GatsbyLink} to="/" _focus={{ bg: "none" }}>
      <Icon
        as={Logo}
        w={["65px", "85px"]}
        h={["65px", "85px"]}
        mt="0.5rem"
        ml="0.5rem"
        borderRadius="full"
      />
    </Link>
  )
}

export default HeaderLogo
