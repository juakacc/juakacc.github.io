import React from "react"
import {
  FaMapMarkerAlt,
  FaBook,
  FaUserAstronaut,
  FaTools,
  FaRegHandPeace,
  FaUserTie,
  FaLanguage,
  FaPhoneAlt,
  FaAt,
} from "react-icons/fa"

import info from "../info"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ButtonScroll from "../components/ButtonScroll"
import LanguageItem from "../components/LanguageItem"
import Skill from "../components/Skill"
import Experience from "../components/Experience"
import "./styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Oi pessoal, sejam bem-vindos ao meu site!</h2>

    <div>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <h3>{info.description}</h3>
    </div>

    <section>
      <h2>
        <FaUserAstronaut /> Sobre o Joaquim...
      </h2>
      <p align="justify">{info.bio}</p>

      <div style={{ display: "flex" }}>
        <p>
          <FaMapMarkerAlt /> {info.locale}
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p>
          <FaBook /> {info.education}
        </p>
      </div>
    </section>

    <section>
      <h2>
        <FaTools /> Skills
      </h2>

      <h3>Principais</h3>
      <div className="flex-container">
        {info.skills.map(item => (
          <Skill name={item} key={item} />
        ))}
      </div>

      <h3>Outras</h3>
      <div className="flex-container">
        {info.moreSkills.map(item => (
          <Skill name={item} key={item} />
        ))}
      </div>
    </section>

    <section>
      <h2>
        <FaRegHandPeace /> Contato
      </h2>

      <p>
        <FaAt />{" "}
        <a
          href="mailto:juakacc@gmail.com"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          {info.contact.email}
        </a>
      </p>

      <p>
        <FaPhoneAlt /> {info.contact.phone}
      </p>
    </section>

    <section>
      <h2>
        <FaUserTie /> Experiência
      </h2>

      {info.experiences.map(item => (
        <Experience key={item.company} experience={item} />
      ))}
    </section>

    <section>
      <h2>
        <FaLanguage /> Idiomas
      </h2>
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
