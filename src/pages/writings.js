import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"

export default function Info() {
  return (
    <Layout page="writings">
      <section className={infoStyles.info_blurb}>
          My writings.
      </section>
    </Layout>
  )
}