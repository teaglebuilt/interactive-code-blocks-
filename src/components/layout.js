import React from "react"
import { StaticQuery, graphql } from "gatsby"
import useDarkMode from "use-dark-mode"
import SEO from "./seo"
import DarkModeToggle from './darkmode'
import '../styles/index.sass'
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
          <div>
            <SEO title={title} description={description} />
            <main className>
              <header className={classes.web_title}>
                TeagleBuilt Technology
                <span>
                  <DarkModeToggle />
                </span>
              </header>
              <div className={classes.content}>
                {(title || description) && (
                  <header className={classes.header}>
                    {title && <h1 className={classes.title}>{title}</h1>}
                  </header>
                )}
                {children}
              </div>
            </main>
          </div>
        )
      }}
    />
  )
}

export default Layout
