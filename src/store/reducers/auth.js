import * as actionTypes  from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState={
  idToken:null,
  localId:null,
  userName:null,
  userEmail:null,
  profileUrl:null,
  loading:false,
  error:false,
  success:false
}

const reducer =( state=initialState,action)=>{
  switch(action.type) {
    case actionTypes.AUTH_START : return updateObject(state,{loading:true,error:false,success:false})
    case actionTypes.AUTH_SUCCESS: return updateObject(state, {error:false, loading:false, success:true,idToken:action.data.idToken,localId:action.data.localId})
    case actionTypes.AUTH_FAIL:
      if(action.data) return updateObject(state, {error: action.data.error.message,loading:false, success:false})
      else return updateObject(state, {error: true, loading: false, success: false})
    case actionTypes.AUTH_LOGOUT: return updateObject(state, {idToken:null,localId:null})
    default: return state
  }
}

export default reducer
