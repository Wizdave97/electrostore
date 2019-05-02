import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavItem from '../NavItem/NavItem';
import { Menu, Search, ShoppingCart } from '@material-ui/icons';
import Logo from '../../logo.svg'
import styles from './styles';

const navbar = props =>{
   const  { classes } = props;
   return  (
       <AppBar className={classes.nav} position='fixed'>
        <Toolbar>
            <div className={classes.logoContainer}> <img src={Logo} className={classes.logo} alt="Electro store"/></div>
            <Typography align='center' classes={{root:classes.logoTextMd}} className={classes.logoText} color="default" variant='h5'>ELECTROSTORE</Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
            <div className={classes.menuItems}>
              <NavItem>Home</NavItem>
              <NavItem>Categories</NavItem>
              <NavItem show={classes.wishlist}>My Wishlist</NavItem>
              <NavItem show={classes.account}>My Account</NavItem>
              <NavItem><ShoppingCart/></NavItem>
            </div>
            <Menu aria-haspopup="true" role='button' tabIndex='0' className={classes.menuIcon}/>
        </Toolbar>
       </AppBar>
   )
} 

export default withStyles(styles)(navbar);