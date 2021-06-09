import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA7Br5_hAbuvK5wEFuLYjHbV4e17MPPwgg",
    authDomain: "netflix-redesign-c2cde.firebaseapp.com",
    projectId: "netflix-redesign-c2cde",
    storageBucket: "netflix-redesign-c2cde.appspot.com",
    messagingSenderId: "1081809874859",
    appId: "1:1081809874859:web:5c2e415d32c65c054e6cee",
    measurementId: "G-PJ0S6E5S6G"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;