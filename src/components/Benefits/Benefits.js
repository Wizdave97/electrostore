import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { LocalShipping, Money, Payment} from '@material-ui/icons';

/*const resizeImages =(imageURL)=>{
  let canvas=document.createElement('canvas')
  return new Promise(resolve=>{
    let image=new Image();
    image.onload = () => {
      const context = canvas.getContext('2d')
      if (image.height > 100) {
        image.width *= 100 / image.height
        image.height = 100
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = image.width
      canvas.height = image.height

      context.drawImage(image, 0, 0, image.width, image.height)

      resolve(canvas.toDataURL('image/jpeg'))
    }

    image.src = imageURL
  })
}*/



const Benefits = props =>{
  const { classes } = props;
  /*const initialState={fs:'',pod:'',mob:''}
  const [state, setState]=useState(initialState)
  useEffect(()=>{
    if(!state.mob){
      resizeImages(Mob).then(url=>{
        setState(state=>({
          ...state,mob:url
        }))
      })
    }
  })
    useEffect(()=>{
      if(!state.pod){
        resizeImages(Pod).then(url=>{
          setState(state=>({
            ...state,pod:url
          }))
        })
      }
    })
    useEffect(()=>{
      if(!state.fs){
        resizeImages(FS).then(url=>{
          setState(state=>({
            ...state,fs:url
          }))
        })
      }
    })*/


  return (
      <div className={classes.benefits}>
        <div className={classes.card}>
          <div className={classes.img}><LocalShipping className={classes.icon} aria-label="free shipping"/></div>
          <Typography variant='body1' align='center'>Free shipping</Typography></div>
        <div className={classes.card}>
          <div className={classes.img}><Payment className={classes.icon} aria-label="pay on delivery"/></div>
          <Typography variant='body1' align='center'>Pay on delivery</Typography></div>
        <div className={classes.card}>
          <div className={classes.img}> <Money className={classes.icon} aria-label="money back guarantee"/></div>
          <Typography variant='body1' align='center'>Money back guarantee</Typography></div>
      </div>
  )
}

export default withStyles(styles)(Benefits)
