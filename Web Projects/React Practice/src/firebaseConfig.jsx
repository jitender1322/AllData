// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPp689CSq0E2vCne2OnB1IErYwH8UVr0U",
    authDomain: "myfbpractice-14649.firebaseapp.com",
    projectId: "myfbpractice-14649",
    storageBucket: "myfbpractice-14649.appspot.com",
    messagingSenderId: "1031588482396",
    appId: "1:1031588482396:web:103e23afc8b34673f8c599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage }