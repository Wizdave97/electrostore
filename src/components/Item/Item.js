import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import AddToCart from '../AddToCart/AddToCart';
import { AddShoppingCart, RemoveShoppingCart } from '@material-ui/icons';
import Iphone from '../../assets/product-12.jpg'

const Item = props => {
  const { classes } = props;
  const initialState={hover:null}

  return (
    <Paper square={true} className={classes.card} >
      <div className={classes.media}>
          <img src={Iphone} alt={props.name}/>
          <AddToCart clicked={''}><AddShoppingCart/></AddToCart>
      </div>
      <div className={classes.cardDetails}>
        <Typography className={classes.name} variant='body1'>{'Iphone X'/*props.name*/}</Typography>
        <Typography variant='body1'>$ {'500'/*props.price*/}</Typography>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Item);
