import React from "react"
import PostCard from "./postcard"



const PostList = ({ posts}) => {
    console.log(posts)
    return(
        <>
        <ul>
          {posts.map(({ node}) => (
            
            <li key={node.id}>
              <PostCard id={node.id}
                        title={node.frontmatter.title}
                        slug={node.fields.slug}
                        description={node.frontmatter.description}
                        tags={node.frontmatter.tags}
              />
            </li>
          ))}
        </ul>
        </>
    )
}

export default PostList