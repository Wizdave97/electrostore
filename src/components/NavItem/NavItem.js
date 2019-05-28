import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styles from './styles'

const navItem = props =>{
    const { classes } = props;
    return(

          <div onClick={()=>props.click?props.click():''} {...props} className={[classes.menu, props.show?props.show:''].join(' ')} role='button' tabIndex='0'>
            <NavLink to={props.to} className={classes.navText}>
              <Typography className={classes.navText} align='center' variant='body1' color='default'>
                  {props.children}
              </Typography>
            </NavLink>
          </div>

    )
}

export default withStyles(styles)(navItem);
