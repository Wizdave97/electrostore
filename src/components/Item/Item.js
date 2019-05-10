import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import AddToCart from '../AddToCart/AddToCart';
import { AddShoppingCart, RemoveShoppingCart } from '@material-ui/icons';

const Item = props => {
  const { classes } = props;

  return (
    <Paper square={true} className={classes.card} >
      <div className={classes.media}>
          <img src={props.data.img} alt={props.data.title}/>
          <AddToCart clicked={''}><AddShoppingCart/></AddToCart>
      </div>
      <div className={classes.cardDetails}>
        <Typography className={classes.text} align='left' variant='body1'>{props.data.title}</Typography>
      </div>
      <div className={classes.cardDetails}>
        <Typography className={classes.text} align='left' variant='body1'>From ${props.data.price}</Typography>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Item);
