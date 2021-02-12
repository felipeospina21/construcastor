import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import { Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Box as="main" m=" 0 0.5rem">
        {children}
      </Box>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
