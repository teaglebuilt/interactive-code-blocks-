import React from "react"
import { Link } from "../components/link"
import { slugify } from "../utils/slugger";
import classes from "../styles/postcard.module.sass"


const PostCard = ({title, description, tags, slug, id}) => {
    console.log(title)
    return (
        <section key={slug} className={classes.chapter}>
            <h2 className={classes.chapterTitle}>
              <Link to={slug}>{title}</Link>
            </h2>
            <p className={classes.chapterDesc}>
              <Link to={slug}>{description}</Link>
            </p>
            <ul>
              {tags.map(tag => (
                  <li key={id}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <span className={classes.tag}>
                      {/* <Icon name={tag} /> */}
                      <span className="pt-2 font-semibold">{tag}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
    )
}

export default PostCard