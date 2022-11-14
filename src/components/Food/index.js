// base
import React from 'react'

// material ui
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    color: 'red'
  }
}))

const Food = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      Food
    </div>
  )
}

export default Food
