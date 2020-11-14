import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

/*
interface LogoProps {
  className?: string
  size?: number
}
 */
const Logo = props => {
  const classes = useStyles(props)

  return (

      <title>MLM React POC</title>

  )
}

const useStyles = makeStyles(theme => ({
  Logo: props => ({
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    width: props.size,
    height: props.size,
  }),
  path: {
    transition: 'all .3s ease',
  },
  outline: props => ({
    fill: props.isInversedOutline ? '#fff' : 'currentColor',
  }),
  letter: props => ({
    fill: props.isInversed ? '#fff' : 'currentColor',
  }),
}))

export default Logo
