import * as actionTypes from './actionTypes';


export const addToCart = (obj) =>{
  return {
    type:actionTypes.ADD_TO_CART,
    data:obj
  }
}

export const removeFromCart = (obj)=> {
  return {
    type:actionTypes.REMOVE_FROM_CART,
    data:obj
  }
}
