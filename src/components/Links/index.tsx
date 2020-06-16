import React, { useState, useEffect } from "react"
import {
  FaGithub,
  FaAt,
  FaLinkedin,
  FaStrava,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"

import "./styles.css"

const Links = () => {
  const [linkIsVisible, setLinksVisible] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      toggleVisibility()
    })
  }, [])

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setLinksVisible(true)
    } else {
      setLinksVisible(false)
    }
  }

  return (
    linkIsVisible && (
      <div className="links-container">
        <a href="https://github.com/juakacc">
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
    )
  )
}

export default Links
