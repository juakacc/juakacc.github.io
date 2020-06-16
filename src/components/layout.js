import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import "./layout.css"
import "./styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="<Joaquim Aníbal Rocha Neto />" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className="site-container">{children}</main>
      </div>
      <footer
        style={{
          background: "#36cc1f",
          padding: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        © {new Date().getFullYear()}, Construído com
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          style={{
            textDecoration: "none",
            color: "#fff",
          }}
        >
          Gatsby
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
