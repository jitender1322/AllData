// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx7MtxrzddURCt_btF5sq7QU3V-MSz9Pg",
  authDomain: "react10to11.firebaseapp.com",
  projectId: "react10to11",
  storageBucket: "react10to11.firebasestorage.app",
  messagingSenderId: "796069376763",
  appId: "1:796069376763:web:78771dbf821a053145f65e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider

export  {auth,db,provider}