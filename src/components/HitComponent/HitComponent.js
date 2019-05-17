import React from 'react';
import {Paper,List,ListItem,ListItemText } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import { withStyles } from '@material-ui/core/styles';
import { connectHits } from 'react-instantsearch-dom'


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
    cursor:'pointer'
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
  }
})
const viewSearchDetail =(id)=> {
  const history=createBrowserHistory()
  history.push('/cart')
}
const hits =(props)=>{
  const { classes } = props
  return (
    <Paper className={[classes.root,props.position,props.show?classes.show:' '].join(' ')} square={true}>
        <List>
          { props.hits.map(hit=>{
            return(
              <ListItem onClick={()=> viewSearchDetail('2')} className={classes.listItem} key={hit.objectID}>
                <div className={classes.imgContainer}>
                  <img src={hit.img}/>
                </div>
                <ListItemText>{hit.title}</ListItemText>
              </ListItem>
            )
          })}
        </List>
    </Paper>
  )
}

export default connectHits(withStyles(styles)(hits))
