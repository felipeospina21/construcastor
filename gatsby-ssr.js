
import React from "react"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { brandTheme } from "./src/styles/theme"
import "firebase/firestore"
import "firebase/auth"

export const wrapPageElement = ({ element }) => {
  const theme = extendTheme(brandTheme)
  return (
    <ChakraProvider resetCSS theme={theme}>
      {element}
    </ChakraProvider>
  )
}