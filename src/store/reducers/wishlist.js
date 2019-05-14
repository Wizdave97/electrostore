import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState={
  item_ids:[],
  wishlist:[],
  quantity:0
}

const addToWishlist = (state,obj) => {
  let newState={...state,wishlist:[...state.wishlist],quantity:state.quantity+1};
  newState.wishlist.push(obj);
  newState.item_ids.push(obj.id);
  return updateObject(state,newState)
}

const removeFromWishlist =(state,obj) =>{
  let newState={...state,item_ids:[...state.item_ids],wishlist:[...state.wishlist],quantity:state.quantity-1};
  let indexOfObjInWishlist=newState.item_ids.indexOf(obj.id);
  newState.item_ids.splice(indexOfObjInWishlist,1);
  newState.wishlist.splice(indexOfObjInWishlist,1);
  return updateObject(state, newState);
}
const reducer = ( state=initialState,action)=>{
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST: return addToWishlist(state, action.data)
    case actionTypes.REMOVE_FROM_WISHLIST: return removeFromWishlist(state, action.data)
    default: return state
  }

}

export default reducer;
