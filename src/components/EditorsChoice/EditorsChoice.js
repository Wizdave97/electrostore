import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Item from '../Item/Item';

const editorsChoice = props =>{
  const { classes } = props;
  return(
    <div className={classes.editorsChoice}>
      {props.editors_choice.map((data,index) =>{
        return (
          <div key={index} className={classes.item}>
              <Item
                data={data}
                wishlistIds={props.wishlistIds}
                cartIds={props.cartIds}
                add={props.add}
                remove={props.remove}
                addToWishlist={props.addToWishlist}
                removeFromWishlist={props.removeFromWishlist}
                />
          </div>
        )
      })}

    </div>
  )
}

export default withStyles(styles)(editorsChoice);
