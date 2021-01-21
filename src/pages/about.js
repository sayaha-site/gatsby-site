import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"

export default function Info() {
  return (
    <Layout page="about">
      <section className={infoStyles.info_blurb}>
          <b>高橋沙也葉 SAYAHA TAKAHASHI<br/><b>
          <br/>
          2015年 筑波大学 芸術専門学群 芸術学専攻 入学<br/>
          2017年 カリフォルニア州立大学 ロングビーチ校 美術史専攻 交換留学<br/>
          2020年 筑波大学 芸術専門学群 芸術学専攻 芸術支援コース 卒業<br/>
          2021年 京都大学大学院 人間環境学研究科 思想文化論講座 修士課程 在学<br/>
          <br/>
          活動歴抜粋<br/>
          2015年 Don't follow the Wind展 学生スタッフ<br/>
          2016年 スイス大使館主催「ダダイズム100周年」ライター<br/>
          2016年 ギャラリー SNOW Contemporary インターンシップ<br/>
          2018年 Pacific Asia Museum(パサデナ市、カリフォルニア州)<br/>
                 キュレトリアル・コレクション・インターンシップ<br/>
          2020年 国立国際美術館 キュレトリアル・インターンシップ(学芸)<br/>
          <br/>
          受賞・助成抜粋<br/>
          2017年 官民協働海外留学支援制度奨学生<br/>
          2020年 芸術専門学群優秀賞(卒業論文)<br/>
      </section>
    </Layout>
  )
}
