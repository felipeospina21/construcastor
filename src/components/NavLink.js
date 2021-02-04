import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Text } from "@chakra-ui/react"


const NavLink = ({url, text}) => {
  return (
    <Link as={GatsbyLink} to={url} color="black" m="0">
      <Text fontSize="xl">{text}</Text>
    </Link>
  )
}

export default NavLink
