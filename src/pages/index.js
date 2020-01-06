import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const siteMetadata = data.site.siteMetadata
  const chapters = data.allMarkdownRemark.edges.map(({ node }) => ({
    slug: node.fields.slug,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
  }))
  return <Layout></Layout>
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
