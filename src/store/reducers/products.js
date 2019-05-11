import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState={
  products:null,
  editors_choice:null,
  just_in:null,
  fetchEditorsChoiceStart:false,
  fetchEditorsChoiceSuccess:false,
  fetchEditorsChoiceFail:false,
  fetchJustInStart:false,
  fetchJustInSuccess:false,
  fetchJustInFail:false,
}
const reduceObjectToArray = data=>{
  const result=[];
  for(let key of Object.keys(data)){
    result.push(data[key]);
  }
  return result;
}
const reducer = (state=initialState, action)=>{
  switch (action.type) {
    case actionTypes.FETCH_EDITORS_CHOICE:
      return updateObject(state,{fetchEditorsChoiceStart:true});
    case actionTypes.FETCH_EDITORS_CHOICE_SUCCESS:
      return updateObject(state, { fetchEditorsChoiceStart:false, editors_choice:reduceObjectToArray(action.data),fetchEditorsChoiceSuccess:true});
    case actionTypes.FETCH_EDITORS_CHOICE_FAIL:
      return updateObject(state, {fetchEditorsChoiceFail:true,fetchEditorsChoiceStart:false,fetchEditorsChoiceSuccess:false});
    case actionTypes.FETCH_JUST_IN:
      return updateObject(state,{fetchJustStart:true});
    case actionTypes.FETCH_JUST_IN_SUCCESS:
      return updateObject(state, { fetchJustInStart:false, just_in:reduceObjectToArray(action.data),fetchJustInSuccess:true});
    case actionTypes.FETCH_JUST_IN_FAIL:
      return updateObject(state, {fetchJustInFail:true,fetchJustInStart:false,fetchJustInSuccess:false});
    default:
      return state

  }

}

export default reducer;