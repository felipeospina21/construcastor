import React from "react"
import { Center, Icon, Link, GridItem } from "@chakra-ui/react"
import { FaRegEnvelope } from "react-icons/fa"

const Social = () => {
  return (
    <GridItem>
      <Center h="100%">
        <Link href="mailto:elcastor@une.net.co" isExternal>
          <Icon as={FaRegEnvelope} boxSize="2rem" mx="1rem" />
        </Link>
      </Center>
    </GridItem>
  )
}

export default Social
