// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8HOs4WnLAZohgDBbp6eGAGNEkyUWION0",
  authDomain: "auth-50aba.firebaseapp.com",
  projectId: "auth-50aba",
  storageBucket: "auth-50aba.firebasestorage.app",
  messagingSenderId: "84551578424",
  appId: "1:84551578424:web:0afcadc6bd5447202dc7cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
