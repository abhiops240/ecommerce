import firebase from 'firebase/app';
import 'firebase/firestore';//this is for database
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBI4xUklnUP4eidJyWoTY_Hthu2Deabmr4",
    authDomain: "ecommerce-8e8ff.firebaseapp.com",
    databaseURL: "https://ecommerce-8e8ff.firebaseio.com",
    projectId: "ecommerce-8e8ff",
    storageBucket: "ecommerce-8e8ff.appspot.com",
    messagingSenderId: "446817901501",
    appId: "1:446817901501:web:533231a1a3df05340e90d4",
    measurementId: "G-7PH44JNTE4"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider  = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;