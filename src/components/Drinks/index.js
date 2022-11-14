// base
import React from 'react'

// material ui
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    color: 'red'
  }
}))

const Drinks = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      Drinks
    </div>
  )
}

export default Drinks
