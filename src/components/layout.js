import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import classes from "../styles/layout.module.sass"

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
        // const meta = data.site.siteMetadata
        return (
          <>
            <SEO title={title} description={description} />
            <main className={classes.root}>
              <div className={classes.content}>
                {(title || description) && (
                  <header className={classes.header}>
                    {title && <h1 className={classes.title}>{title}</h1>}
                  </header>
                )}
                {children}
              </div>
            </main>
          </>
        )
      }}
    />
  )
}

export default Layout
