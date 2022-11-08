import React from "react"
import Layout from "./src/features/layouts/main/Layout"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { brandTheme } from "./src/styles/theme"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const wrapPageElement = ({ element }) => {
  const theme = extendTheme(brandTheme)
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
