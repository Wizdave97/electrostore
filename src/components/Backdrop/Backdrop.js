import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles =theme =>({
  root:{
    width:'100%',
    position:'absolute',
    top:0,
    left:0,
    display:'none',
    height:'100%',
    backgroundColor:'rgb(0,0,0)',
    opacity:0,
    zIndex:2500,
    transition:'opacity 0.5s'
  },
  show:{
    opacity:0.3,
    display:'block'
  }
})

const backDrop = props=>{
  const { classes } = props
  return (
    <div onClick={()=> props.toggleSideDrawer()} className={[classes.root, props.showSideDrawer?classes.show:''].join(' ')}></div>
  )
}

export default withStyles(styles)(backDrop);
