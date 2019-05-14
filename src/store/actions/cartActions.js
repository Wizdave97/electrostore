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
export const pushCartToBackendAsync= (cart,userId)=>{
  for(let obj of cart) {
    obj.userId=userId
  }
  return dispatch=>{
    dispatch(pushCartToBackendSync(actionTypes.ADD_CART_TO_BACKEND));
    fetch(`https://electrostore-bb2a3.firebaseio.com/cart.json`,{
      method:'POST',
      body:JSON.stringify(cart)
    }).then(response=>response.json()).then(response=>{
      dispatch(pushCartToBackendSync(actionTypes.ADD_CART_TO_BACKEND_SUCCESS))
    }).catch(err=>{
      dispatch(pushCartToBackendSync(actionTypes.ADD_CART_TO_BACKEND_FAIL))
    })
  }
}
