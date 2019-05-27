import firebase from 'firebase';
import * as actionTypes from './actionTypes';


const firebaseConfig = {
  apiKey: "AIzaSyArs2eYMjFtvxRpRmYqWexaDuQnd0OLX44",
  authDomain: "electrostore-bb2a3.firebaseapp.com",
  databaseURL: "https://electrostore-bb2a3.firebaseio.com",
  projectId: "electrostore-bb2a3",
  storageBucket: "electrostore-bb2a3.appspot.com",
  messagingSenderId: "41927039846",
  appId: "1:41927039846:web:47b1904dc2ed6b7c",
};

firebase.initializeApp(firebaseConfig);

const uploadProfileSync= (type,str) =>{
  return {
    type:type,
    data:str
  }
}

export const uploadProfileInfoAsync = (name,tel,img,type,isUpdate) =>{
return (dispatch,getState) =>{
  const idToken=getState().auth.idToken;
  const storage=firebase.storage();
  dispatch(uploadProfileSync(actionTypes.IMAGE_UPLOAD_START, null));
  let file = img

  // Create a root reference
  var storageRef = firebase.storage().ref();

  let ext=type.match(/jpe?g|png/g)[0];
  // Create a reference to 'images/mountains.jpg'

  let metadata = {
    contentType: type
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child('profilePictures/' + name + '.' + ext ).put(file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      dispatch(uploadProfileSync(actionTypes.UPLOADING_IMAGE, progress))
    }, function(error) {
      dispatch(uploadProfileSync(actionTypes.IMAGE_UPLOAD_FAIL, null))

  }, function() {
    // Upload completed successfully, now we can get the download URL
    dispatch(uploadProfileSync(actionTypes.IMAGE_UPLOAD_SUCCESS, null))
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      const userId=getState().auth.localId;

      const profile={name:name,userId:userId,tel:tel,photoUrl:downloadURL}
      dispatch(uploadProfileSync(actionTypes.PROFILE_UPLOAD_START,null));
      fetch(`https://electrostore-bb2a3.firebaseio.com/users.json?auth=${idToken}`,{
        method:'POST',
        body:JSON.stringify(profile)
      }).then(response=>response.json()).then(response=>{
        dispatch(uploadProfileSync(actionTypes.PROFILE_UPLOAD_SUCCESS,null));
      }).catch(err=>{
        dispatch(uploadProfileSync(actionTypes.PROFILE_UPLOAD_FAIL,null))
        // Create a reference to the file to delete
        var desertRef = storageRef.child('profilePictures/'+name+'.'+ext);
        // Delete the file
        desertRef.delete().then(function() {
          // File deleted successfully
        }).catch(function(error) {
          // Uh-oh, an error occurred!
        });
      });
    });
  });
}

}
