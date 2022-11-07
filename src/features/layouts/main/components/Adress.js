import React from "react"
import { Text, Icon, Grid, GridItem } from "@chakra-ui/react"
import { GrLocation } from "react-icons/gr"

const Adress = () => {
  return (
    <Grid templateColumns={["0.1fr 1fr", "0.08fr 1fr"]} gap={1}>
      <GridItem rowEnd={2}>
        <Text>
          {" "}
          <Icon as={GrLocation} />
        </Text>
      </GridItem>
      <GridItem>
        <Text>Calle 48 (Pichincha) #55-59</Text>
      </GridItem>
      <GridItem colStart={2}>
        <Text>Medellín, Colombia</Text>
      </GridItem>
    </Grid>
  )
}

export default Adress
