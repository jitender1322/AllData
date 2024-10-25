// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBX-Pa-NOYu3HfxBC_FGt9dL2ALNHsrMg",
    authDomain: "auth-74cad.firebaseapp.com",
    projectId: "auth-74cad",
    storageBucket: "auth-74cad.appspot.com",
    messagingSenderId: "298890075086",
    appId: "1:298890075086:web:d2382c3daf404330b3299f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export { auth, provider }