import React from "react";
import classes from "../styles/tagbar.module.sass"


const TagBar = () => (
    <ul className={classes.tag_container}>
        <li className={classes.tag}>X</li>
        <li>X</li>
        <li>X</li>
        <li>X</li>
        <li>X</li>
    </ul>
)


export default TagBar

const taglistquery = graphql`
query {
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`;