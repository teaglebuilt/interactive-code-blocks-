import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import useLocalStorage from "@illinois/react-use-local-storage"
import { ChapterContext } from "../context"

const Template = ({ data }) => {
  const { markdownRemark, site } = data
  const { courseId } = site.siteMetadata
  const { frontmatter, htmlAst } = markdownRemark
  const { title, description, prev, next, id } = frontmatter
  const [activeExc, setActiveExc] = useState(null)
  const [completed, setCompleted] = useLocalStorage(
    `${courseId}-completed-${id}`,
    []
  )
  const buttons = [
    { slug: prev, text: "« Previous Chapter" },
    { slug: next, text: "Next Chapter »" },
  ]

  return (
    <ChapterContext.Provider
      value={{ activeExc, setActiveExc, completed, setCompleted }}
    ></ChapterContext.Provider>
  )
}

export default Template

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        courseId
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        id
        title
        description
        next
      }
    }
  }
`
