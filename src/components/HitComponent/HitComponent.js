import React from 'react';
import {Paper,List,ListItem,ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connectHits } from 'react-instantsearch-dom';
import AlgoliaLogo from '../../assets/algolia.png';


const styles= theme =>({
  root:{
    position:'absolute',
    display:'none',
    transition:'height 0.5s',
    zIndex:1200,
    overflowY:'scroll'
  },
  listItem:{
    display:'flex',
    flexWrap:'nowrap',
    cursor:'pointer',
    '& a':{
      textDecoration:'none',
      display:'flex',
      flexWrap:'nowrap',
      color:'inherit'
    }
  },
  imgContainer:{
    width:'25%',
    '& img':{
      width:'100%',
      height:'auto'
    }
  },
  show:{
    display:'flex !important'
  },

})

const hits =(props)=>{
  const { classes } = props
  const viewSearchDetail =(id)=> {
    if(props.toggleSideDrawer) props.toggleSideDrawer()
    props.setQuery('')
  }
  return (
    <Paper className={[classes.root,props.position,props.show?classes.show:' '].join(' ')} square={true}>
        <List>
          { props.hits.map(hit=>{
            return(
              <ListItem onClick={()=> viewSearchDetail('2')} className={classes.listItem} key={hit.objectID}>
                <Link to={`/details/${hit.id}`}>
                <div className={classes.imgContainer}>
                  <img src={hit.img} alt={hit.title}/>
                </div>
                <ListItemText>{hit.title}</ListItemText>
                </Link>
              </ListItem>
            )
          })}
        </List>
        <div className={classes.imgContainer}><img src={AlgoliaLogo} alt='algolia search'/></div>
    </Paper>
  )
}

export default connectHits(withStyles(styles)(hits))
