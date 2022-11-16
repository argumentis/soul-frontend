// base
import React from 'react'

// material ui
import { makeStyles } from '@material-ui/core/styles'

// category
import Category from './Category'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    color: 'red',
    border: '1px solid red'
  }
}))

const Food = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      food
      <Category/>
    </div>
  )
}

export default Food
