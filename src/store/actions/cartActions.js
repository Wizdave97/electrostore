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
export const pushCartToBackendSync= (type)=>{
  return{
    type:type
  }
}
export const fetchCartSync= (type,data)=>{
  return {
    type:type,
    data:data
  }
}
export const fetchCart= (userId) =>{
  return (dispatch,getState)=>{
    const idToken=getState().auth.idToken
    dispatch(pushCartToBackendSync(actionTypes.FETCH_CART));
    fetch(`https://electrostore-bb2a3.firebaseio.com/cart.json?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`).then(response=>{
      return response.json()
    }).then(response=>{
      let keys=Object.keys(response)
      if(keys.length!==0){
        for(let key of keys){
          dispatch(addToCart(response[key]))
        }
      }
      dispatch(fetchCartSync(actionTypes.FETCH_CART_SUCCESS, response))
    }).catch(err=>{
      dispatch(fetchCartSync(actionTypes.FETCH_CART_FAIL,null))
    })
  }

}
export const pushCartToBackendAsync= (cart,userId)=>{
  cart=[...cart];
  for(let obj of cart) {
    obj["userId"]=userId
  }
  return (dispatch,getState)=>{
    const idToken=getState().auth.idToken
    dispatch(pushCartToBackendSync(actionTypes.ADD_CART_TO_BACKEND));
    for(let obj of cart) {
      fetch(`https://electrostore-bb2a3.firebaseio.com/cart.json?auth=${idToken}`,{
        method:'POST',
        body:JSON.stringify(obj)
      }).then(response=>response.json()).then(response=>{
        dispatch(pushCartToBackendSync(actionTypes.ADD_CART_TO_BACKEND_SUCCESS))
      }).catch(err=>{
        dispatch(pushCartToBackendSync(actionTypes.ADD_CART_TO_BACKEND_FAIL))
      })
    }
  }
}
