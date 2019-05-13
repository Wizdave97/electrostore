import React from 'react';
import styles from './styles';
import { Paper, IconButton ,Typography} from '@material-ui/core';
import { Delete, AddBox, MinusBox } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const cartItem = props =>{
  const { classes } = props;
  return (
    <Paper className={classes.card}>
      <div className={classes.image}><img src={props.img} alt={props.title} /></div>
      <div className={classes.others}>
        <div className={classes.details}><Typography variant='body1' color='inherit'>{props.title}</Typography></div>
        <div className={classes.quantity}><IconButton><MinusBox color='secondary'/></IconButton><Typography variant='body1' color='inherit'>{props.quantity}</Typography><IconButton><AddBox color='secondary'/></IconButton></div>
        <div className={classes.delete}><Button><Delete/>Delete Item</Button></div>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(cartItem);
