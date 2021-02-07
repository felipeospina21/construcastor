import React from "react"
import NavLink from "./NavLink"
import { RiMenu3Fill, RiStethoscopeLine } from "react-icons/ri"
import {
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react"

const NavLinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState("right")

  return (
    // <HStack w="80%" spacing="5rem" justifyContent="center">
    //   <NavLink url="/" text="Inicio" />
    //   <NavLink url="/conocenos" text="Conócenos" />
    //   <NavLink url="/carta" text="Carta" />
    //   <NavLink url="/reservas" text="Reservas" />
    // </HStack>
    <>
      <Box w="80%" display="flex" justifyContent="right" alignItems="center">
        <Icon as={RiMenu3Fill} boxSize="2rem" ml="auto" mr="0.5rem" cursor="pointer" onClick={onOpen}>
          Open
        </Icon>
      </Box>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">BUHO</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>
              <NavLink url="/" text="Inicio" onClose={onClose}/>
              <NavLink url="/conocenos" text="Conócenos" onClose={onClose}/>
              <NavLink url="/carta" text="Carta" onClose={onClose}/>
              <NavLink url="/reservas" text="Reservas" onClose={onClose}/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default NavLinks
