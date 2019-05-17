import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide} from '@material-ui/core';


const Transition = props =>{
  return <Slide direction='up' {...props} />
}
const modal= props =>{

  return (
    <Dialog
      open={props.show}
      TransitionComponent={Transition}
      onClose={props.handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-content'
    >
      <DialogTitle id='modal-title'>{'Item Added To Cart'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='modal content' >{props.itemname} has been successfully added to the cart</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='secondary' onClick={props.handleClose}>Continue Shopping</Button>
        <Button onClick={props.handleClose} component={Link} to='/cart' variant='outlined' color='secondary'>Go to Cart</Button>
      </DialogActions>
    </Dialog>
  )
}

export default modal;
