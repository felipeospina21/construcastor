import React from "react"
import { Flex, Box, Text } from "@chakra-ui/react"

function BrandCategories({ categories }) {
  return (
    <Flex flexWrap="wrap" justify="flex-start" align="center" margin="0 auto">
      {categories.map(cat => (
        <Box
          key={cat}
          m="0.35rem 0.8rem"
          p="0.1rem 0.5rem"
          borderRadius="lg"
          bg="blackAlpha.50"
          boxShadow="2px 2px 5px rgba(143, 149, 178, 0.5)"
        >
          <Text fontSize="0.75rem" textTransform="capitalize">
            {cat}
          </Text>
        </Box>
      ))}
    </Flex>
  )
}

export default BrandCategories
