import React from 'react';
import { Paper, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Home, Shop, AccountCircle, Category } from '@material-ui/icons'
import styles from './styles';

const sideDrawer = props => {
    const { classes }= props;
    return(
        <Paper className={[classes.root, props.show?classes.show:''].join(' ')} square={true}>
          <div className={classes.profile}></div>
          <List className={classes.list}>
            <ListItem button><Home/><ListItemText primary="Home"/></ListItem>
            <Divider light/>
            <ListItem button><AccountCircle/><ListItemText primary="My Account"/></ListItem>
            <Divider light/>
            <ListItem button><Shop/><ListItemText primary="My Wishlist"/></ListItem>
            <Divider light/>
            <ListItem button><Category/><ListItemText primary="Categories"/></ListItem>
          </List>
        </Paper>
    )
}
export default withStyles(styles)(sideDrawer);
