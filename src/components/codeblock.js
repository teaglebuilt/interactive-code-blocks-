import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
              <Juniper repo={data.site.siteMetadata.juniper.repo}>
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
