import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import AppleLogo from '../../assets/Apple_logo.svg';
import SamsungLogo from '../../assets/Samsung_logo.svg';
import GoogleLogo from '../../assets/Google_logo.svg';

const Brands = props =>{
  const { classes } = props;


  return (
      <div className={classes.brands}>
        <div className={classes.card}>
          <div className={classes.img}><img src={AppleLogo} alt="Apple"/></div>
        </div>
        <div className={classes.card}>
          <div className={classes.img}><img src={SamsungLogo} alt="Samsung"/></div>
        </div>
        <div className={classes.card}>
          <div className={classes.img}> <img src={GoogleLogo} alt="Google"/></div>
        </div>
      </div>
  )
}

export default withStyles(styles)(Brands)
