import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
