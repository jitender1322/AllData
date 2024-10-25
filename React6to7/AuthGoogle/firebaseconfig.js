// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcS0Akp9fUkcQEtjSotWXJ6H-VmsHbtAI",
    authDomain: "auth-55031.firebaseapp.com",
    projectId: "auth-55031",
    storageBucket: "auth-55031.appspot.com",
    messagingSenderId: "40298425346",
    appId: "1:40298425346:web:27e32953a9dc856ad84b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export { auth, provider };