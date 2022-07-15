import React from 'react'
import classes from './NotFound.module.css'
const NotFound = () => {
  return (
    <div className={classes.NotFound}><h1>Not Found</h1>
    <a href="/" className={classes.NotFoundLink}> CLICK HERE to go HOME</a>
    </div>
  )
}

export default NotFound