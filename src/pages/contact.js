import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"

export default function Info() {
  return (
    <Layout page="contact">
      <section className={infoStyles.info_blurb}>
          My contact.
      </section>
    </Layout>
  )
}