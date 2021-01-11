import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDLbTWcvnvi0jtbQ5jMfSx8FYU3GN_5xas",
  authDomain: "book-santa-app-ef171.firebaseapp.com",
  projectId: "book-santa-app-ef171",
  storageBucket: "book-santa-app-ef171.appspot.com",
  messagingSenderId: "205314891560",
  appId: "1:205314891560:web:b445831c9b8310b0cf3a1d"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();