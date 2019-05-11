import * as actionTypes from './actionTypes';


const fetchSync= (data,type)=>({
  type:type,
  data:data
})

export const fetchProductsAsync =() =>{
  return dispatch=>{
    dispatch(fetchSync(null, actionTypes.FETCH_PRODUCTS_START));
    fetch('https://electrostore-bb2a3.firebaseio.com/smartphones.json').then(response=>{
      if(response.status!==200){
        dispatch(fetchSync(null, actionTypes.FETCH_PRODUCTS_FAIL))
        return null
      }
      return response.json();
    }).then(data=>{
      dispatch(fetchSync(data,actionTypes.FETCH_PRODUCTS_SUCCESS))
    }).catch(err=>{
      dispatch(fetchSync(null, actionTypes.FETCH_PRODUCTS_FAIL))
    })
  }
}

export const fetchEditorsChoiceAsync= ()=>{
  return dispatch =>{
    dispatch(fetchSync(null, actionTypes.FETCH_EDITORS_CHOICE))
    fetch(`https://electrostore-bb2a3.firebaseio.com/smartphones.json?orderBy="editors_choice"&equalTo=true`).
    then(response=> {
      return response.json()}
    ).then(data=>{
      console.log(data.status)
      dispatch(fetchSync(data, actionTypes.FETCH_EDITORS_CHOICE_SUCCESS))
    }).catch(err=>{
      dispatch(fetchSync(null, actionTypes.FETCH_EDITORS_CHOICE_FAIL))
    })
  }
}

export const fetchJustInAsync= ()=>{
  return dispatch =>{
    dispatch(fetchSync(null, actionTypes.FETCH_JUST_IN))
    fetch(`https://electrostore-bb2a3.firebaseio.com/smartphones.json?orderBy="just_in"&equalTo=true`).
    then(response=> {
      return response.json()}
    ).then(data=>{
      console.log(data.status)
      dispatch(fetchSync(data, actionTypes.FETCH_JUST_IN_SUCCESS))
    }).catch(err=>{
      dispatch(fetchSync(null, actionTypes.FETCH_JUST_IN_FAIL))
    })
  }
}
