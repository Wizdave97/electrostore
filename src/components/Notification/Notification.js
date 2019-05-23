import React from 'react';
import { Chip, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme=> ({
  notification:{
    position:'absolute',
    display:'flex',
    zIndex:1500,
    top:'30px',
    opacity:1,
    left:'calc((100% - 30%) / 2)',
    transform:'translate(0%)',
    transition:'transform 0.5s, opacity 0.5s',
    backgroundColor:theme.palette.primary.dark
  },
  chip:{
    margin:theme.spacing.unit/2
  }
});

const notification= props=>{
  const { classes } = props

  return (
    <Paper className={classes.notification} onClick={()=>props.hideNotification()}>
      <Chip
      className={classes.chip}
      label='Please complete your profile for an improved experience'
      onDelete={props.hideNotification}
      />
    </Paper>
  )
}

export default withStyles(styles)(notification);
