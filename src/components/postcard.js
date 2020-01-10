import React from "react"
import { Link } from "../components/link"
import Icon from "../icons"
import { slugify } from "../utils/slugger";
import classes from "../styles/postcard.module.sass"


const PostCard = ({title, description, tags, slug, id}) => {
    
    return (
        <section key={slug} className={classes.chapter}>
            <h2 className={classes.chapterTitle}>
              <Link to={slug}>{title}</Link>
            </h2>
            <p className={classes.chapterDesc}>
              <Link to={slug}>{description}</Link>
            </p>
            <ul className={classes.tag_container}>
              {tags.map(tag => (
                  <li key={id}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <span className={classes.post_tag}>
                      <Icon name={tag} />
                      <span className={classes.tag_title}>{tag}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
    )
}

export default PostCard