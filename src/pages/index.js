import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import info from "../info"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Oi pessoal, sejam bem-vindos ao meu site!</h2>

    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h4>{info.description}</h4>

    <section>
      <h1>Dados Pessoais</h1>
      <h5>Um pouco sobre mim</h5>
      <p>{info.bio}</p>

      <h5>De onde sou</h5>
      <p>{info.locale}</p>

      <h5>Onde estudei</h5>
      <p>{info.education}</p>
    </section>

    <section>
      <h1>Skills</h1>
      <h4>Principais</h4>
      <ul>
        {info.skills.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Outras</h4>
      <ul>
        {info.moreSkills.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section>
      <h1>Contato</h1>

      <h5>E-mail</h5>
      <p>{info.contact.email}</p>

      <h5>Telefone</h5>
      <p>{info.contact.phone}</p>
    </section>

    <section>
      <h1>Experiência</h1>

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
      <h1>Idiomas</h1>
      {info.languages.map(item => (
        <div key={item.id}>
          <h3>{item.language}</h3>
          <p>{item.fluency}</p>
        </div>
      ))}
    </section>
  </Layout>
)

export default IndexPage
