import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "../components/link"
import classes from "../styles/index.module.sass"

export default ({ data }) => {
  const chapters = data.allMarkdownRemark.edges.map(({ node }) => ({
    slug: node.fields.slug,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
  }))
  return (
    <Layout>
      {chapters.map(({ slug, title, description }) => (
        <section key={slug} className={classes.chapter}>
          <h2 className={classes.chapterTitle}>
            <Link to={slug}>{title}</Link>
          </h2>
          <p className={classes.chapterDesc}>
            <Link to={slug}>{description}</Link>
          </p>
        </section>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { type: { eq: "chapter" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
