import React, {useState} from 'react';
import { Paper, Divider, List, ListItem, ListItemText, Badge,Typography } from '@material-ui/core';
import Hits from '../HitComponent/HitComponent';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom';
import { Home, Shop, AccountCircle, Category, Search, ShoppingCart } from '@material-ui/icons'
import styles from './styles';

const searchClient = algoliasearch('MDJ9DY7L3L', 'e27633f869dc3179a2458014005e9b7c');
const SideDrawer = props => {
    const { classes }= props;
    const [query,setQuery]=useState('');
    const logOut= () =>{
      props.toggleSideDrawer()
      if(props.isAuthenticated) props.logOut()
    }
    return(
        <Paper className={[classes.root, props.show?classes.show:''].join(' ')} square={true}>
          <div className={classes.profile}>
            <div className={classes.picture} style={props.photoUrl?{backgroundImage:`url(${props.photoUrl})`}:{}}></div>
            <Typography variant='body1' color='inherit' align='center' style={{width:'100%'}}>{props.username?props.username:'Annonymous User'}</Typography>
          </div>
          <List className={classes.list}>
            <ListItem button>
              <div className={classes.search}>
                {props.currentView==='/auth'?null:
              <InstantSearch  searchClient={searchClient} indexName="products">
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
                      <Hits
                        show={query}
                        setQuery={setQuery}
                        toggleSideDrawer={props.toggleSideDrawer}
                        position={classes.hitsPosition}/>
                    </InstantSearch>
                  }
            </div>
            </ListItem>
            <Divider light/>
            <Link to='/'><ListItem onClick={()=>props.toggleSideDrawer()} button><Home/><ListItemText primary="Home"/></ListItem></Link>
            <Divider light/>
            <Link to={props.isAuthenticated?'/profile':'/auth'}>
            <ListItem button onClick={()=>props.toggleSideDrawer()}>
              <AccountCircle/>
                    <ListItemText  primary="My Profile"/>
              </ListItem>
            </Link>
            <Divider light/>
            <Link to='/cart'><ListItem onClick={()=>props.toggleSideDrawer()} button>
              <Badge style={{margin:'4px'}} color='secondary' badgeContent={props.quantity}><ShoppingCart/></Badge>
              <ListItemText primary="Cart"/></ListItem></Link>
            <Divider light/>
            <Link to='/wishlist'><ListItem onClick={()=>props.toggleSideDrawer()} button>
              <Badge style={{margin:'4px'}} color='secondary' badgeContent={props.wishes}><Shop/></Badge>
              <ListItemText primary="My Wishlist"/></ListItem></Link>
            <Divider light/>
            <Link to='/products'>
              <ListItem onClick={()=>props.toggleSideDrawer()} button><Category/><ListItemText primary="Products"/></ListItem>
            </Link>
            <Divider light/>
            <Link to={props.isAuthenticated?'/':'/auth'}><ListItem onClick={()=> logOut()} button>
              <AccountCircle/>
              <ListItemText primary={props.isAuthenticated?'Logout':'Login'}/></ListItem></Link>
          </List>
        </Paper>
    )
}
export default withStyles(styles)(SideDrawer);
