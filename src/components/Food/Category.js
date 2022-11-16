/* eslint-disable */
// base
import React from 'react'
import PropTypes from 'prop-types'

// material ui
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// icons
// import TitleImage from './test-title.png'
// import Test from './test.svg'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }
}))

const Category = ({ item = {} }) => {
  const { title = 'Хот-доги', description = 'Hot-Dog' } = item
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      {/*<Test/>*/}
      {/*<img src={TitleImage} alt="category image"/>*/}
    </div>
  )
}

Category.propTypes = {
  item: PropTypes.object.isRequired
}

export default Category