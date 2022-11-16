// base
import React from 'react'

// material ui
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    color: 'red',
    border: '1px solid red'
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
