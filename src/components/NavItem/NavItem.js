import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

const navItem = props =>{
    const { classes } = props;
    return(
        <div className={[classes.menu, props.show?props.show:''].join(' ')} role='button'>
            <Typography className={classes.navText} align='center' variant='body1' color='default'>
                {props.children}
            </Typography>
        </div>
    )
}

export default withStyles(styles)(navItem);