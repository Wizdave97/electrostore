import * as actionTypes from './actionTypes';


export const addToWishlist = (obj) =>{
  return {
    type:actionTypes.ADD_TO_WISHLIST,
    data:obj
  }
}

export const removeFromWishlist = (obj)=> {
  return {
    type:actionTypes.REMOVE_FROM_WISHLIST,
    data:obj
  }
}
