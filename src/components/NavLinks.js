import React from "react"
import NavLink from "./NavLink"
import { HStack } from "@chakra-ui/react"

const NavLinks = () => {
  return (
    <HStack w="80%" spacing="5rem" justifyContent="center">
      <NavLink url="/" text="Inicio" />
      <NavLink url="/conocenos" text="Conócenos" />
      <NavLink url="/reservas" text="Reservas" />
    </HStack>
  )
}

export default NavLinks
