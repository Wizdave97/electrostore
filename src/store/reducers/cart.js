import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState={
  item_ids:[],
  cart:[],
  sumTotal:0.00,
  quantity:0
}

const addToCart = (state,obj) => {
  let newState={...state,cart:[...state.cart],quantity:state.quantity+1,sumTotal:Number(state.sumTotal)+ Number(obj.price).toFixed(2)};
  newState.cart.push(obj);
  newState.item_ids.push(obj.id);
  return updateObject(state,newState)
}

const removeFromCart =(state,obj) =>{
  let newState={...state,item_ids:[...state.item_ids],cart:[...state.cart],quantity:state.quantity-1,sumTotal:Number(state.sumTotal)-Number(obj.price).toFixed(2)};
  let indexOfObjInCart=newState.item_ids.indexOf(obj.id);
  newState.item_ids.splice(indexOfObjInCart,1);
  newState.cart.splice(indexOfObjInCart,1);
  return updateObject(state, newState);
}
const reducer = ( state=initialState,action)=>{
  switch (action.type) {
    case actionTypes.ADD_TO_CART: return addToCart(state, action.data)
    case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action.data)
    default: return state
  }

}

export default reducer;
