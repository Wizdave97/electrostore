import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArs2eYMjFtvxRpRmYqWexaDuQnd0OLX44",
  authDomain: "electrostore-bb2a3.firebaseapp.com",
  databaseURL: "https://electrostore-bb2a3.firebaseio.com",
  projectId: "electrostore-bb2a3",
  storageBucket: "electrostore-bb2a3.appspot.com",
  messagingSenderId: "41927039846",
  appId: "1:41927039846:web:47b1904dc2ed6b7c"
};

firebase.initializeApp(firebaseConfig);

const storage=firebase.storage();
