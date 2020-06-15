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

        <footer
          style={{
            background: "#eee",
            textAlign: "center",
            color: "#aaa",
            padding: 10,
          }}
        >
          © {new Date().getFullYear()}, Construído com
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            style={{
              textDecoration: "none",
            }}
          >
            Gatsby
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
