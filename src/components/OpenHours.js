import React from "react"
import { GridItem, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"

const OpenHours = () => {
  return (
    <GridItem maxW="250px" colSpan="2" margin="auto">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Horarios</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td pl="0.3rem" py="0.2rem">
              Lunes a Viernes
            </Td>
            <Td pl="0" py="0.2rem">
              8:00am
            </Td>
            <Td pl="0" py="0.2rem">
              -
            </Td>
            <Td pl="0" py="0.2rem">
              5:00pm
            </Td>
          </Tr>
          <Tr>
            <Td pl="0.3rem" py="0.2rem">
              Sábados
            </Td>
            <Td pl="0" py="0.2rem">
              8:00am
            </Td>
            <Td pl="0" py="0.2rem">
              -
            </Td>
            <Td pl="0" py="0.2rem">
              1:30pm
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </GridItem>
  )
}

export default OpenHours
