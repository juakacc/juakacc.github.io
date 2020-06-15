import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaStrava,
  FaWhatsapp,
  FaAt,
} from "react-icons/fa"

import "./styles.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      background: "#36cc1f",
      marginBottom: `1.45rem`,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        marginLeft: "20px",
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div
      style={{
        marginRight: "10px",
      }}
    >
      <a href="https://github.com/juakacc" rel="Teste">
        <FaGithub color="#fff" size={25} />
      </a>
      <a href="mailto:juakacc@gmail.com">
        <FaAt color="#fff" size={25} />
      </a>
      <a href="https://linkedin.com/in/juakacc/">
        <FaLinkedin color="#fff" size={25} />
      </a>
      <a href="https://strava.com/athletes/20531642">
        <FaStrava color="#fff" size={25} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5583991847766">
        <FaWhatsapp color="#fff" size={25} />
      </a>
      <a href="https://instagram.com/juakape">
        <FaInstagram color="#fff" size={25} />
      </a>
      <a href="https://facebook.com/juakac">
        <FaFacebook color="#fff" size={25} />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
