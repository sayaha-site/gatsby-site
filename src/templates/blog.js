import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins

export default function Blog(props) {
  const data = props.data.markdownRemark

  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        <div className={blogTemplateStyles.blog__info}>
          <h3>{data.frontmatter.title}</h3>
          <h4>{data.frontmatter.date}</h4>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <div className={blogTemplateStyles.blog__footer}>
        </div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`
