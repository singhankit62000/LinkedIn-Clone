import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhejiJ1-kPxkJ9VFNqE4Bk1ZFG333z7N0",
    authDomain: "linkedin-clone-deddf.firebaseapp.com",
    projectId: "linkedin-clone-deddf",
    storageBucket: "linkedin-clone-deddf.appspot.com",
    messagingSenderId: "118495186777",
    appId: "1:118495186777:web:7f42774c3af68a95730648"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };