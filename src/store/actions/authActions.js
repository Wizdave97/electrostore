import * as actionTypes from './actionTypes';

const authSync =(type,authData) =>({
  type:type,
  data:authData
})

export const authAsync = (isSignUp) =>{
  return dispatch =>{
    dispatch(authSync(actionTypes.AUTH_START,null))
    let url =`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyAssertion?key=[API_KEY]`
  }
}
