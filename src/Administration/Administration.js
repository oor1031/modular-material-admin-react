import React from 'react';
import { Avatar, makeStyles, ListItemAvatar, List, ListItemText, ListItem } from '@material-ui/core';
import administrationUsersList from '../_api/_data/administrationUsersList'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Administration = ({ match }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {administrationUsersList && administrationUsersList.list.map(item => {
        return (
          <ListItem key={item.id} button>
            <ListItemAvatar>
              <Avatar alt={item.avatarUrl} src={item.avatarUrl}/>
            </ListItemAvatar>
            <ListItemText primary={`${item.firstName} ${item.lastName}`} />
          </ListItem>
        );
      })}
    </List>
  )
}

Administration.propTypes = {}

export default Administration
