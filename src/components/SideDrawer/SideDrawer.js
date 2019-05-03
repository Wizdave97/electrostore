import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const sideDrawer = props => {
    const { classes }= props;
    return(
        <Paper className={[classes.root, props.show?classes.show:''].join(' ')} square={true}>

        </Paper>
    )
}
export default withStyles(styles)(sideDrawer);