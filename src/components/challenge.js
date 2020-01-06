import React, { useRef, useCallback, useContext, useEffect } from "react"
import { ChapterContext } from "../context"
import classNames from "classnames"
import classes from "../styles/challenge.module.sass"

const Challenge = ({ id, title, type, children }) => {
  console.log(id, title, type, children)
  const challengeRef = useRef()
  const challengeId = parseInt(id)
  const {
    activeChallenge,
    setActiveChallenge,
    completed,
    setCompleted,
  } = useContext(ChapterContext)
  const isExpanded = activeChallenge === challengeId
  const isCompleted = completed.includes(challengeId)
  useEffect(() => {
    if (isExpanded && challengeRef.current) {
      challengeRef.current.scrollIntoView()
    }
  }, [isExpanded])
  const handleExpand = () => {}
  const rootClassNames = classNames(classes.root, {
    [classes.expanded]: isExpanded,
    [classes.wide]: isExpanded && type === "slides",
    [classes.completed]: !isExpanded && isCompleted,
  })
  const titleClassNames = classNames(classes.title, {
    [classes.titleExpanded]: isExpanded,
  })
  return (
    <section ref={challengeRef} id={id} className={rootCålassNames}>
      <h2 className={titleClassNames} onClick={handleExpand}>
        <span>
          <span
            className={classNames(classes.id, {
              [classes.idCompleted]: isCompleted,
            })}
          >
            {challengeId}
          </span>
          {title}
        </span>
      </h2>
      {isExpanded && <div>{children}</div>}
    </section>
  )
}

export default Challenge
