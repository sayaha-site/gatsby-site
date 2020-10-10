import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section className={infoStyles.info_blurb}>
          Top page.
      </section>
    </Layout>
  )
}