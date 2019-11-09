import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar'
import avartaImage from '../../static/gender-equality-edited.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: '300px',
    height:'400px',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position:'static',
    overflowY:'show',
  },
}));

export default function JobsViews(props) {
  const classes = useStyles();
  var views = []
  views.length = props.jobs.applicants
  views.fill('job')
  console.log(views)

  return (
    <div className={classes.root}>
      <List>
        {views.map(viewer => (
          <ListItem key={`viewer${views.indexOf(viewer)}`} button>
          <ListItemIcon>
          <Avatar src={avartaImage}/>
          </ListItemIcon>
          <ListItemText primary={`sheku`} />
        </ListItem>
        ))}
      </List>
    </div>
  );
}

JobsViews.protoType = {
  views:PropTypes.number.isRequired
}