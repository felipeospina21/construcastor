import React from "react"
import { Text, Icon, Grid, GridItem } from "@chakra-ui/react"
import { GrPhone } from "react-icons/gr"

const Phone = () => {
  return (
    <Grid templateColumns={["0.1fr 1fr", "0.3fr 1fr"]} gap={1}>
      <GridItem rowEnd={2}>
        <Text>
          {" "}
          <Icon as={GrPhone} />
        </Text>
      </GridItem>
      <GridItem>
        <Text>512 93 28</Text>
      </GridItem>
      <GridItem colStart={2}>
        <Text>512 18 07</Text>
      </GridItem>
    </Grid>
  )
}

export default Phone
