import React from 'react';
import styles from './styles';
import { Paper, IconButton ,Typography,Button} from '@material-ui/core';
import { Delete, AddBox, Remove } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const cartItem = props =>{
  const { classes } = props;
  return (
    <Paper className={classes.card} square={true}>
      <div className={classes.image}><img src={props.data.img} alt={props.data.title} /></div>
      <div className={classes.others}>
        <div className={classes.details}>
          <Typography align='center' variant='body1' color='inherit'>{props.data.title}</Typography>
          <Typography align='center' variant='body1' color='inherit'>${props.data.price}</Typography>
        </div>
        <div className={classes.quantity}><IconButton><Remove color='secondary'/></IconButton><Typography variant='body1' color='inherit'>{props.data.quantity}</Typography><IconButton><AddBox color='secondary'/></IconButton></div>
        <div className={classes.delete}><Button onClick={()=>props.delete(props.data)}><Delete/>Delete Item</Button></div>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(cartItem);
