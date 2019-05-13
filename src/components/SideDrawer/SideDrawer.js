import React from 'react';
import { Paper, Divider, List, ListItem, ListItemText, Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Home, Shop, AccountCircle, Category, Search, ShoppingCart } from '@material-ui/icons'
import styles from './styles';

const sideDrawer = props => {
    const { classes }= props;
    return(
        <Paper className={[classes.root, props.show?classes.show:''].join(' ')} square={true}>
          <div className={classes.profile}></div>
          <List className={classes.list}>
            <ListItem button><Search/><ListItemText primary="Search"/></ListItem>
            <Divider light/>
            <ListItem button><Home/><ListItemText primary="Home"/></ListItem>
            <Divider light/>
            <ListItem button><AccountCircle/><ListItemText primary="My Account"/></ListItem>
            <Divider light/>
            <ListItem button><Badge style={{margin:'4px'}} color='secondary' badgeContent={props.quantity}><ShoppingCart/></Badge><ListItemText primary="Cart"/></ListItem>
            <Divider light/>
            <ListItem button><Shop/><ListItemText primary="My Wishlist"/></ListItem>
            <Divider light/>
            <ListItem button><Category/><ListItemText primary="Products"/></ListItem>
          </List>
        </Paper>
    )
}
export default withStyles(styles)(sideDrawer);
