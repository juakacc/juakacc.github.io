import React, { useState, useEffect } from "react"

import "./styles.css"
import { FaArrowAltCircleUp } from "react-icons/fa"

const ButtonScroll = () => {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      toggleVisibility()
    })
  }, [])

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="button-scroll">
      {isVisible && (
        <FaArrowAltCircleUp onClick={scrollToTop} size={40} color="#36cc1f" />
      )}
    </div>
  )
}

export default ButtonScroll
