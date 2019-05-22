import * as actionTypes from './actionTypes';

const authSync =(type,data) =>({
  type:type,
  data:data
})

export const authAsync = (authData,isSignUp) =>{
  return dispatch =>{
    dispatch(authSync(actionTypes.AUTH_START,null))
    let url=`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyArs2eYMjFtvxRpRmYqWexaDuQnd0OLX44`;
    if (isSignUp) url =`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyArs2eYMjFtvxRpRmYqWexaDuQnd0OLX44`;
    fetch(url,{
      method:'POST',
      body:JSON.stringify(authData)
    }).then(response=>{
      return response.json()
    }).then(response=>{
      if(response.error) dispatch(authSync(actionTypes.AUTH_FAIL,response))
      else dispatch(authSync(actionTypes.AUTH_SUCCESS, response))
    }).catch(err=>{
      dispatch(authSync(actionTypes.AUTH_FAIL, null))
    })
  }
}
