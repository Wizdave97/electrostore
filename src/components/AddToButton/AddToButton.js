import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const styles= theme=>({
  button:{
    position:'absolute',
    zIndex:1000,
    padding:'10px',
    boxSizing:'border-box',
    cursor:'pointer',
    backgroundColor:theme.palette.secondary.light,
    transition:'transform 0.5s',
    '&:hover':{
      backgroundColor:orange[500]
    }
  }
})
const addToButton = props =>{
  const {classes}= props
  const clickHandler= () =>{
    props.clicked(props.data);
    if(typeof props.cartified==='function') {
      props.cartified()}
    else{
      props.wishified()
    }
  }
  return(
    <div onClick={()=>clickHandler()} className={[classes.button,props.position,'button'].join(' ')}  role="button" aria-label={props.label}>
        {props.children}
    </div>
  )
}

export default withStyles(styles)(addToButton);
