import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { LocalShipping, Money, Payment} from '@material-ui/icons';




const Benefits = props =>{
  const { classes } = props;

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
