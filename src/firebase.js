import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiEu5aEJ_qHnDroVzxf3t2x-D95NppYNQ",
  authDomain: "robinhood-21b22.firebaseapp.com",
  projectId: "robinhood-21b22",
  storageBucket: "robinhood-21b22.appspot.com",
  messagingSenderId: "1087054547994",
  appId: "1:1087054547994:web:a8201ff6043a0643e195a3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };