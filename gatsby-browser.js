import React from "react"
import Layout from "./src/features/layouts/main/Layout"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { brandTheme } from "./src/styles/theme"

export const wrapPageElement = ({ element }) => {
  const theme = extendTheme(brandTheme)
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
