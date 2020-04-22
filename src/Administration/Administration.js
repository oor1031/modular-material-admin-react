import React, { useState, useEffect } from 'react'
// import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Avatar,
  makeStyles,
  ListItemAvatar,
  List,
  ListItemText,
  ListItem,
} from '@material-ui/core'

import api from '../_api'

const Administration = ({ match }) => {
  const classes = useStyles()

  const [users, setUsers] = useState([])
  const [usersCount, setUsersCount] = useState(0)

  async function fetchUsers() {
    const { users, count } = await api.users.getList()

    setUsers(users)
    setUsersCount(count)
  }

  useEffect(
    fetchUsers => {
      fetchUsers()
    },
    [fetchUsers],
  )

  return (
    <List className={classes.root}>
      {users.length &&
        users.list.map(item => {
          return (
            <ListItem key={item.id} button>
              <ListItemAvatar>
                <Avatar alt={item.avatarUrl} src={item.avatarUrl} />
              </ListItemAvatar>
              <ListItemText primary={`${item.firstName} ${item.lastName}`} />
            </ListItem>
          )
        })}
    </List>
  )
}

Administration.propTypes = {}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default Administration
