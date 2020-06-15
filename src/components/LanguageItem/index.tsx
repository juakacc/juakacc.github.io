import React from "react"

import "./styles.css"

type LanguageItemParams = {
  language: string
  fluency: string
}

const LanguageItem = ({ language, fluency }: LanguageItemParams) => {
  return (
    <div className="container">
      <h4 className="title">{language}</h4>
      <p className="value">{fluency}</p>
    </div>
  )
}

export default LanguageItem
