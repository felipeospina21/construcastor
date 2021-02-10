import React from "react"
import { Box, Text, SimpleGrid, Center, Icon, Link } from "@chakra-ui/react"
import { FaInstagram, FaFacebook } from "react-icons/fa"

const ContactInfo = () => {
  return (
    <SimpleGrid columns={2} h="100%">
      <Box>
        <Center flexDir="column" h="100%">
          <Text>Envigado, Colombia</Text>
          <Text>301-374-4334</Text>
        </Center>
      </Box>

      <Box>
        <Center h="100%">
          <Link href="https://www.instagram.com/buhoentrepinos/" isExternal>
            <Icon as={FaInstagram} boxSize="2rem" mx="1rem" />
          </Link>
          <Link href="https://www.facebook.com/buhoentrepinos/" isExternal>
            <Icon as={FaFacebook} boxSize="2rem" mx="1rem" />
          </Link>
        </Center>
      </Box>
    </SimpleGrid>
  )
}

export default ContactInfo
