import React from 'react'
import classes from './GitHubCard.module.css'
import { timeConverter } from '../../helpers/timeConverter'
const GitHubCard = (props) => {
  const newTime = timeConverter(props.time)
  return (
    <div>
    <div className={classes.github}>
      <div className={classes.githubAvatarCard}>
        <img
          src={props?.owner?.avatar_url}
          alt=""
          className={classes.githubAvatar}
        />
      </div>
      <div className={classes.githubDescription}>
        <h1>{props.name}</h1>
        <p className={classes.githubDescriptionText}>
        {props.description}
        </p>

        <div className={classes.githubStars}>
          <span>Stars: {props.stargazers_count}</span>
          <span>Issues: {props.issues}</span>
          <p>{newTime} by {props.owner.login}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GitHubCard
