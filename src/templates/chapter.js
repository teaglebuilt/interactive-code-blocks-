import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'
import { ChapterContext } from '../context'


const Template = ({ data }) => {
    const { markdownRemark, site } = data
    return (
        <ChapterContext.Provider></ChapterContext.Provider>
    )
}

export default Template;

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
            prev
        }
    }
}
`;