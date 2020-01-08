import React from "react"
import { StaticQuery, graphql } from "gatsby"
import classes from '../styles/codeblock.module.sass'
import Juniper from "./juniper"
import { get } from "https"

function getFiles({ allCode }) {
  return Object.assign(
    {},
    ...allCode.edges.map(({ node }) => ({
      [node.name]: node.code,
    }))
  )
}

class CodeBlock extends React.Component {
  state = { Juniper: null, showSolution: false }

  handleShowSolution() {
    this.setState({ showSolution: true })
  }

  updateJuniper() {
    if (window.Juniper && !this.state.Juniper) {
      this.setState({ Juniper: window.Juniper })
    }
  }

  componentDidMount() {
    this.updateJuniper()
  }

  componentDidUpdate() {
    this.updateJuniper()
  }

  render() {
    const { Juniper, showSolution } = this.state
    const { source, solution, test, children } = this.props
    const juniperClassNames = {
      cell: classes.cell,
      input: classes.input,
      button: classes.button,
      output: classes.output,
  }

    const query = graphql`
      {
        site {
          siteMetadata {
            juniper {
              repo
            }
          }
        }
        allCode {
          edges {
            node {
              name
              code
            }
          }
        }
      }
    `
    return !Juniper ? (
      "Loading Juniper..."
    ) : (
      <StaticQuery
        query={query}
        render={data => {
          console.log(data)
          const files = getFiles(data)
          console.log(files)
          const sourceFile = files[source]
          const solutionFile = files[solution]
          return (
            <>
              <Juniper repo={data.site.siteMetadata.juniper.repo} 
                        classNames={juniperClassNames}>
                  {showSolution ? solutionFile : sourceFile}
              </Juniper>
              {children}
              <button onClick={() => this.handleShowSolution()}>
                Show solution
              </button>
            </>
          )
        }}
      />
    )
  }
}

export default CodeBlock
