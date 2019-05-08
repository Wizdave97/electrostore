import React, { useState,useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import FreeShipping from '../../assets/free_shipping.png';
import Mob from '../../assets/mob.png';
import Pod from '../../assets/pod.jpg';

const resizeImages =(imageURL)=>{
  let canvas=document.createElement('canvas')
  return new Promise(resolve=>{
    let image=new Image();
    image.onload = () => {
      const context = canvas.getContext('2d')
      if (image.height > 50) {
        image.width *= 50 / image.height
        image.height = 50
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = image.width
      canvas.height = image.height

      context.drawImage(image, 0, 0, image.width, image.height)

      resolve(canvas.toDataURL('image/jpeg'))
    }

    image.src = imageURL
  })
}

const Benefits = props =>{
  const { classes } = props;
  const initialState={fs:'',pod:'',mob:''}
  const [state, setState]=useState(initialState)
  /*useEffect(()=>{
    resizeImages(Mob).then(url=>{
      setState(state=>({
        ...state,mob:url
      }))
    })
  })*/

    useEffect(()=>{
      if(!state.pod){
        resizeImages(Pod).then(url=>{
          setState(state=>({
            ...state,pod:url
          }))
        })
      }
    })



  return (
      <div className={classes.benefits}>
        <div className={classes.card}><img src={FreeShipping} alt="pay on delivery" /><Typography variant='body1' align='center'>Free shipping</Typography></div>
        <div className={classes.card}>{state.pod?<img src={state.pod} alt="pay on delivery" />:''}<Typography variant='body1' align='center'>Pay on delivery</Typography></div>
        <div className={classes.card}> <img src={Mob} alt="Money back guarantee" /><Typography variant='body1' align='center'>Money back guarantee</Typography></div>
      </div>
  )
}

export default withStyles(styles)(Benefits)
