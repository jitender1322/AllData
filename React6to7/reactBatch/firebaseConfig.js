// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr3AJcQHXNx66nDJ4eNF6A7YyGHvh9Gec",
    authDomain: "react6to7.firebaseapp.com",
    projectId: "react6to7",
    storageBucket: "react6to7.appspot.com",
    messagingSenderId: "55303652504",
    appId: "1:55303652504:web:75a531c93a2e20c7153ced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };