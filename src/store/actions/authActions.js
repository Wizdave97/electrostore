import * as actionTypes from './actionTypes';

const authSync =(type,data) =>({
  type:type,
  data:data
})

const storeAuthInfo= (data) =>{
  if(!localStorage.mobstore){
    localStorage.mobstore='';
  }
  const expiresIn= new Date( new Date().getTime() + new Date(Number(data.expiresIn)*1000).getTime()).getTime()
  const authData={idToken:data.idToken,localId:data.localId,expiresIn:expiresIn}
  localStorage.mobstore=JSON.stringify(authData);
}
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
      else {
        dispatch(authSync(actionTypes.AUTH_SUCCESS, response))
        storeAuthInfo(response)
        authCheckTimeout(response.expiresIn)
      }
    }).catch(err=>{
      dispatch(authSync(actionTypes.AUTH_FAIL, null))
    })
  }
}
export const authLogout = () =>{
  localStorage.mobstore=''
  return {
    type:actionTypes.AUTH_LOGOUT
  }
}
export const authCheckTimeout = (expiresIn) =>{
  return dispatch => {
    setTimeout(()=>{
      authLogout()
    },Number(expiresIn*1000))
  }
}
export const autoSignIn = () =>{
  return dispatch =>{
    if(localStorage.mobstore){
      const authData=JSON.parse(localStorage.mobstore);
      const tokenValidity=new Date().getTime() < Number(authData.expiresIn);
      if (tokenValidity) {
        dispatch(authSync(actionTypes.AUTH_SUCCESS,authData))
      }
      else dispatch(authSync(actionTypes.AUTH_FAIL,null))
    }
  }
}
