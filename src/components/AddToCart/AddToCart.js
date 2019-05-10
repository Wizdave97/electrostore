import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles= theme=>({
  button:{
    position:'absolute',
    zIndex:1200,
    padding:'4px',
    boxSizing:'border-box',
    borderRadius:'0.5rem 0px 0px',
    cursor:'pointer',
    backgroundColor:theme.palette.secondary.light,
    bottom:0,
    right:0,
    transform:'translate(100%,100%)',
    transition:'transform 0.5s',
    '&:hover':{
      backgroundColor:theme.palette.action
    },
    [theme.breakpoints.down('xs')]:{
      transform:'translate(0%,0%)'
    }
  }
})
const addToCart = props =>{
  const {classes}= props
  return(
    <div onClick={()=>props.clicked()} className={classes.button}  role="button" aria-label={props.label}>
        {props.children}
    </div>
  )
}

export default withStyles(styles)(addToCart);
