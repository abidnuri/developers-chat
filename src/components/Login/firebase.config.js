import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDxIjH0W25zFfEbrEJBhFMiiMKeG_NFO8",
    authDomain: "developers-chat-b5a37.firebaseapp.com",
    projectId: "developers-chat-b5a37",
    storageBucket: "developers-chat-b5a37.appspot.com",
    messagingSenderId: "970107248088",
    appId: "1:970107248088:web:408173bdd45be335b9a6ad",
    measurementId: "G-X85VKHJMGK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;