// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDru4_dtq4LhFnvrLCIEv86R22A5FrOiZo",
  authDomain: "react11to12.firebaseapp.com",
  projectId: "react11to12",
  storageBucket: "react11to12.firebasestorage.app",
  messagingSenderId: "400411248294",
  appId: "1:400411248294:web:33e84052c223acc3e09667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider(app)

export {auth,db,provider}