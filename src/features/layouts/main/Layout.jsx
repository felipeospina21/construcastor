import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        as="main"
        m={[" 0 0.5rem", null, null, null, null, "0 auto"]}
        maxW="1700px"
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
