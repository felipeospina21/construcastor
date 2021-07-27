import React from "react"
import { Center, Icon, Link } from "@chakra-ui/react"
import { FaRegEnvelope } from "react-icons/fa"

const Social = () => {
  return (
    <Center h="100%" m="0.65rem auto 1.5rem auto">
      <Link href="mailto:elcastor@une.net.co" isExternal>
        <Icon as={FaRegEnvelope} boxSize="2rem" mx="1rem" />
      </Link>
    </Center>
  )
}

export default Social
