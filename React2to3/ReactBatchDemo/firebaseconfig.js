// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPBaGSNCLRP9bLVn--WfaJ2yfhRL9bgKs",
  authDomain: "react2to3-56461.firebaseapp.com",
  projectId: "react2to3-56461",
  storageBucket: "react2to3-56461.firebasestorage.app",
  messagingSenderId: "652498413318",
  appId: "1:652498413318:web:a2f7f083ace0a4cf86e087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}