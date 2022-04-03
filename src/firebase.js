import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB9HmEE6GCQMzD7q0HCMWD4rGjlS3T8sDw",
    authDomain: "linkedin-clone-1c2dd.firebaseapp.com",
    projectId: "linkedin-clone-1c2dd",
    storageBucket: "linkedin-clone-1c2dd.appspot.com",
    messagingSenderId: "124378467207",
    appId: "1:124378467207:web:8eee74fee9f0b24fd9e122"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.fireestore();
const auth = firebaseApp.auth();

export {db,auth};