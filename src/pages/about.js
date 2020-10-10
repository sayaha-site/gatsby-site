import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"

export default function Info() {
  return (
    <Layout page="about">
      <section className={infoStyles.info_blurb}>
          高橋沙也葉 Sayaha TAKAHASHI  
    　      
          1995年三重県生まれ。戦後日本とアメリカのアートシーンの交差に関心を持ち研究を行っている。  
          2020年現在は京都大学大学院に在学し、とりわけ1960年代から70年代におけるアメリカ美術の「脱物質化」の傾向について、  
          リチャード・セラ等の作家に着目して研究を行っている。
      </section>
    </Layout>
  )
}
