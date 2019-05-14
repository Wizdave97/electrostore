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
export const pushWishlistToBackendSync= (type)=>{
  return{
    type:type
  }
}
export const pushWishlistToBackendAsync= (wishlist,userId)=>{
  for(let obj of wishlist) {
    obj.userId=userId
  }
  return dispatch=>{
    dispatch(pushWishlistToBackendSync(actionTypes.ADD_WISHLIST_TO_BACKEND));
    fetch(`https://electrostore-bb2a3.firebaseio.com/wishlist.json`,{
      method:'POST',
      body:JSON.stringify(wishlist)
    }).then(response=>response.json()).then(response=>{
      dispatch(pushWishlistToBackendSync(actionTypes.ADD_WISHLIST_TO_BACKEND_SUCCESS))
    }).catch(err=>{
      dispatch(pushWishlistToBackendSync(actionTypes.ADD_WISHLIST_TO_BACKEND_FAIL))
    })
  }
}
