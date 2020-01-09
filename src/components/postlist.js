import React from "react"
import { Link } from "../components/link"
import classes from "../styles/index.module.sass"



const PostList = ({posts}) => {

    return(
        <>
        <ul>
        {posts.map(({ slug, title, description }) => (
        <section key={slug} className={classes.chapter}>
          <h2 className={classes.chapterTitle}>
            <Link to={slug}>{title}</Link>
          </h2>
          <p className={classes.chapterDesc}>
            <Link to={slug}>{description}</Link>
          </p>
        </section>
      ))}
        </ul>
        </>
    )
}

export default PostList