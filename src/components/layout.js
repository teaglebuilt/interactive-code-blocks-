import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import Header from "./header"
import "./layout.css"

const Layout = ({ title, description, children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              bio
            }
          }
        }
      `}
      render={data => {
        const meta = data.site.siteMetadata
        return (
          <>
            <SEO title={title} description={description} />
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
