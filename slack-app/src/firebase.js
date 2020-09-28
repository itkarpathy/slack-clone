import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1YljNIUbFsnBh7jgmtx1dPv5MhwecaQc",
  authDomain: "slack-app-60730.firebaseapp.com",
  databaseURL: "https://slack-app-60730.firebaseio.com",
  projectId: "slack-app-60730",
  storageBucket: "slack-app-60730.appspot.com",
  messagingSenderId: "417107913903",
  appId: "1:417107913903:web:1908e673be87ccb70ab85a",
  measurementId: "G-WXFSZWD8TD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
