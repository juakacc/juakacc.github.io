import React from "react"
import { FaMapMarkerAlt, FaBook } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import info from "../info"
import ButtonScroll from "../components/ButtonScroll"
import LanguageItem from "../components/LanguageItem"

import "./styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Oi pessoal, sejam bem-vindos ao meu site!</h2>

    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h3>{info.description}</h3>

    <section>
      <h2>Dados Pessoais</h2>
      <h5>Um pouco sobre mim</h5>
      <p align="justify">{info.bio}</p>

      <div style={{ display: "flex" }}>
        <p>
          <FaMapMarkerAlt />
          {info.locale}
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p>
          <FaBook /> {info.education}
        </p>
      </div>
    </section>

    <section>
      <h2>Skills</h2>
      <h3>Principais</h3>
      <ul>
        {info.skills.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Outras</h3>
      <ul>
        {info.moreSkills.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section>
      <h2>Contato</h2>

      <h5>E-mail</h5>
      <p>{info.contact.email}</p>

      <h5>Telefone</h5>
      <p>{info.contact.phone}</p>
    </section>

    <section>
      <h2>Experiência</h2>

      {info.experiences.map(item => (
        <div key={item.company}>
          <p>{item.company}</p>
          <p>{item.period}</p>
          <p>{item.classification}</p>
          <ul>
            {item.description.map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>

    <section>
      <h2>Idiomas</h2>
      <div className="div-idiomas">
        {info.languages.map(item => (
          <LanguageItem
            key={item.id}
            language={item.language}
            fluency={item.fluency}
          />
        ))}
      </div>
    </section>

    <ButtonScroll />
  </Layout>
)

export default IndexPage
