import React from "react"

import "./styles.css"
import { FaBusinessTime, FaRocket } from "react-icons/fa"

type ExperienceParams = {
  experience: {
    company: string
    period: string
    classification: string
    description: string[]
  }
}

const Experience = ({
  experience: { company, period, classification, description },
}: ExperienceParams) => {
  return (
    <div className="experience-container">
      <p>
        <span className="company">{company}</span> <span>{classification}</span>
      </p>
      <p className="period">
        <FaBusinessTime /> {period}
      </p>
      <ul>
        {description.map(value => (
          <li key={value}>
            <p>
              <FaRocket size={15} /> {value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
