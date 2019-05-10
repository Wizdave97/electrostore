import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Item from '../Item/Item';

const editorsChoice = props =>{
  const { classes } = props;
  return(
    <div className={classes.editorsChoice}>
      <div className={classes.item}>
          <Item/>
      </div>
    </div>
  )
}

export default withStyles(styles)(editorsChoice);
