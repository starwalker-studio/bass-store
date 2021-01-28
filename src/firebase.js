import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCFWtxcTHoEEuyDvJVJVjfhQQ_s8ZX8T-M",
    authDomain: "bass-store-react.firebaseapp.com",
    projectId: "bass-store-react",
    storageBucket: "bass-store-react.appspot.com",
    messagingSenderId: "919066559770",
    appId: "1:919066559770:web:07c65c3a0ba226813a18a3",
    measurementId: "G-5ZTP9C5PP0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {firebase , auth, db, storage};