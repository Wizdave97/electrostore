import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  loading:false,
  uploadingImage:false,
  imageUploadStart:false,
  imageUploadProgress:0,
  uploadingImageSuccess:false,
  uploadingImageFail:false,
  error:false,
  success:false
}
const reducer =(state=initialState,action) =>{
  switch(action.type){
    case actionTypes.IMAGE_UPLOAD_START: return updateObject(state,{imageUploadStart:true,loading:false,uploadingImage:false,imageUploadProgress:0,uploadingImageFail:false,uploadingImageSuccess:false,error:false,success:false})
    case actionTypes.UPLOADING_IMAGE: return updateObject(state, {uploadingImage:true,imageUploadProgress:action.data})
    case actionTypes.IMAGE_UPLOAD_SUCCESS: return updateObject(state,{uploadingImageSuccess:true,uploadingImage:false})
    case actionTypes.IMAGE_UPLOAD_FAIL: return updateObject(state,{uploadingImage:false,uploadingImageFail:true})
    case actionTypes.PROFILE_UPLOAD_START: return updateObject(state,{loading:true,error:false,success:false})
    case actionTypes.PROFILE_UPLOAD_SUCCESS: return updateObject(state,{loading:false,success:true,error:false})
    case actionTypes.PROFILE_UPLOAD_FAIL: return updateObject(state,{loading:false,success:false,error:true})
    default:   return state
  }
}

export default reducer;
