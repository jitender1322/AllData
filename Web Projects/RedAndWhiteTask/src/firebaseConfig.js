// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpqye1KoaF7nn3IRf7gsG8JZFWjzKo1AE",
  authDomain: "todorw-f892b.firebaseapp.com",
  projectId: "todorw-f892b",
  storageBucket: "todorw-f892b.appspot.com",
  messagingSenderId: "733455868294",
  appId: "1:733455868294:web:8ba84a4dd670a0ec940c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore=getFirestore(app);

export {auth,firestore};