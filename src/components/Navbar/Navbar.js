import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Badge } from '@material-ui/core';
import Hits from '../HitComponent/HitComponent';
import { withStyles } from '@material-ui/core/styles';
import NavItem from '../NavItem/NavItem';
import { Menu, Search, ShoppingCart } from '@material-ui/icons';
import Logo from '../../logo.svg';
import ToolTip from '../ToolTip/ToolTip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import styles from './styles';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom';
const searchClient = algoliasearch('MDJ9DY7L3L', 'e27633f869dc3179a2458014005e9b7c');



const Navbar = props =>{
   const  { classes } = props;
   const [query,setQuery]=useState('');
   const [arrowRef,setArrowRef]= useState(null);
   const [toolTipOpen,setToolTipOpen]= useState(false);
   const handleArrowRef = node => {
      setArrowRef(node);
    };
  const  handleTooltipClose = () => {
    setToolTipOpen(false);
  };

  const handleTooltipOpen = () => {
    setToolTipOpen(true);
  };
   return  (
       <AppBar position='fixed'>
        <Toolbar>
            <div className={classes.logoContainer}> <img src={Logo} className={classes.logo} alt="Electro store"/></div>
            <Typography align='center' classes={{root:classes.logoTextMd}} className={classes.logoText} color="default" variant='h5'>MOBSTORE</Typography>
            <div className={classes.search}>
              { props.currentView==='/auth'?null:
              <InstantSearch searchClient={searchClient} indexName="products">
                <SearchBox className={classes.inputRoot}
                      submit={<Search/>}
                      onChange={(event)=>setQuery(event.currentTarget.value)}
                      onReset={()=>setQuery('')}
                      defaultRefinement=''
                      translations={{
                      placeholder: 'Search...',
                      }} />
                      <Configure
                        hitsPerPage={4}
                        analytics={false}
                        distinct
                        />
                      <Hits show={query} setQuery={setQuery} position={classes.hitsPosition}/>
              </InstantSearch>
            }
            </div>
            <div className={classes.menuItems}>
              <NavItem to={'/'} click={()=>null}>Home</NavItem>
              <NavItem to={'/products'} click={()=>null}>Products</NavItem>
              <NavItem to={'/wishlist'} show={classes.wishlist} click={()=>null}><Badge style={{margin:'4px'}} badgeContent={props.wishes} color="secondary">My WishList</Badge></NavItem>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <ToolTip logOut={props.logOut} isAuthenticated={props.isAuthenticated} open={toolTipOpen} handleTooltipClose={handleTooltipClose} handleArrowRef={handleArrowRef} arrowRef={arrowRef}>
                  <NavItem to={window.location.path} show={classes.account} click={handleTooltipOpen}>My Account</NavItem>
                </ToolTip>
              </ClickAwayListener>
              <NavItem to={'/cart'} click={()=>null} ><Badge style={{margin:'4px'}} badgeContent={props.quantity} color="secondary"><ShoppingCart aria-label='cart'/></Badge></NavItem>
            </div>
            <Menu onClick={()=>props.toggleSideDrawer()} aria-haspopup="true" role='button' tabIndex='0' className={classes.menuIcon}/>
        </Toolbar>
       </AppBar>
   )
}

export default withStyles(styles)(Navbar);
