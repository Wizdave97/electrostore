import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import AddToButton from '../AddToButton/AddToButton';
import { AddShoppingCart, RemoveShoppingCart, Shop } from '@material-ui/icons';

const Item = props => {
  const { classes } = props;
  const initialState={cartified:false,wishified:false}
  const [state, setState]=useState(initialState);
  const setCartifiedHandler=()=>{
    setState(state=>({
      cartified:!state.cartified
    }))
  }
  return (
    <Paper square={true} className={classes.card} >
      <div className={[classes.media,'media'].join(' ')}>
          <img src={props.data.img} alt={props.data.title}/>
          <AddToButton label={'Add to wishlist'} position={classes.wishlist} data={props.data}><Shop/></AddToButton>
          <AddToButton label={'Add to cart'} position={classes.cart} cartified={setCartifiedHandler} clicked={state.cartified?props.remove:props.add} data={props.data}>{state.cartified?<RemoveShoppingCart color='error'/>:<AddShoppingCart/>}</AddToButton>
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
