import React from "react"
import { Grid, GridItem } from "@chakra-ui/react"
import Adress from "./Adress"
import Phone from "./Phone"

const ContactInfo = () => {
  return (
    // <Center flexDir="row" h="100%" mt="1rem">
    <GridItem colSpan={3}>
      <Grid templateColumns={["1fr 0.5fr", "1fr 0.3fr"]}>
        <Adress />
        <Phone />
      </Grid>
    </GridItem>
    // </Center>
  )
}

export default ContactInfo
