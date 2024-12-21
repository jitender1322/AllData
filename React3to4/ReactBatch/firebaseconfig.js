// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBev5d_ug5hPIsqMVkCrJewRjUvat0dTb8",
  authDomain: "react3to4.firebaseapp.com",
  projectId: "react3to4",
  storageBucket: "react3to4.firebasestorage.app",
  messagingSenderId: "975661876338",
  appId: "1:975661876338:web:cd27a4387e4b8039b46eeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
