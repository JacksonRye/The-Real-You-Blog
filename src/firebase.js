import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBUVIuOIynekOvoDuXr3FskeE2WJcas1vc",
    authDomain: "the-real-you-6297e.firebaseapp.com",
    databaseURL: "https://the-real-you-6297e.firebaseio.com",
    projectId: "the-real-you-6297e",
    storageBucket: "the-real-you-6297e.appspot.com",
    messagingSenderId: "98430719004",
    appId: "1:98430719004:web:5369a2a06795a32ee03bd9",
    measurementId: "G-CCYP4LHEZ6"
  };
  
  firebase.initializeApp(config)
  
  export default firebase