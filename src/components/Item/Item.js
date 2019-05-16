import React, { useState, useEffect } from 'react';
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
    if(!state.cartified)  {
      props.setItemName(props.data.title)
      props.toggleModal()
    }
    setState(state=>({
      cartified:!state.cartified
    }))
  }
  const setWishifiedHandler=()=>{
    setState(state=>({
      wishified:!state.wishified
    }))
  }
  useEffect(()=>{
    if(props.cartIds.length!==0){
      let index=props.cartIds.indexOf(props.data.id);
      if(index>=0) setCartifiedHandler()
    }
    if(props.wishlistIds.length!==0){
      let index=props.wishlistIds.indexOf(props.data.id);
      if(index>=0) setWishifiedHandler()
    }
  },[])

  return (
    <Paper square={true} className={classes.card} >
      <div className={[classes.media,'media'].join(' ')}>
          <img src={props.data.img} alt={props.data.title}/>
          <AddToButton label={'Add to wishlist'}
            wishified={setWishifiedHandler}
            clicked={state.wishified?props.removeFromWishlist:props.addToWishlist}
            position={classes.wishlist}
            data={props.data}>
            <Shop color={state.wishified?'error':'inherit'}/>
        </AddToButton>
          <AddToButton
            label={'Add to cart'}
            position={classes.cart}
            cartified={setCartifiedHandler}
            clicked={state.cartified?props.remove:props.add}
            data={props.data}>
            {state.cartified?<RemoveShoppingCart color='error'/>:<AddShoppingCart/>}
          </AddToButton>
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
