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
export const fetchWishlistSync= (type,data)=>{
  return {
    type:type,
    data:data
  }
}
export const fetchWishlist= (userId) =>{
  return (dispatch,getState)=>{
    const idToken=getState().auth.idToken
    dispatch(pushWishlistToBackendSync(actionTypes.FETCH_WISHLIST));
    fetch(`https://electrostore-bb2a3.firebaseio.com/wishlist.json?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`).then(response=>{
      return response.json()
    }).then(response=>{
      let keys=Object.keys(response)
      if(keys.length!==0){
        for(let key of keys){
          dispatch(addToWishlist(response[key]))
        }
      }
      dispatch(fetchWishlistSync(actionTypes.FETCH_WISHLIST_SUCCESS, response))
    }).catch(err=>{
      dispatch(fetchWishlistSync(actionTypes.FETCH_WISHLIST_FAIL,null))
    })
  }

}
export const pushWishlistToBackendAsync= (wishlist,userId)=>{
  wishlist=[...wishlist];
  for(let obj of wishlist) {
    obj["userId"]=userId
  }
  return (dispatch,getState)=>{
    const idToken=getState().auth.idToken
    dispatch(pushWishlistToBackendSync(actionTypes.ADD_WISHLIST_TO_BACKEND));
    for(let obj of wishlist) {
      fetch(`https://electrostore-bb2a3.firebaseio.com/wishlist.json?auth=${idToken}`,{
        method:'POST',
        body:JSON.stringify(obj)
      }).then(response=>response.json()).then(response=>{
        dispatch(pushWishlistToBackendSync(actionTypes.ADD_WISHLIST_TO_BACKEND_SUCCESS))
      }).catch(err=>{
        dispatch(pushWishlistToBackendSync(actionTypes.ADD_WISHLIST_TO_BACKEND_FAIL))
      })
    }
  }
}
