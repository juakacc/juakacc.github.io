import React from "react"

import "./styles.css"

type SkillParams = {
  name: string
}

const Skill = ({ name }: SkillParams) => {
  return (
    <div className="skill-container">
      <p>{name}</p>
    </div>
  )
}

export default Skill
