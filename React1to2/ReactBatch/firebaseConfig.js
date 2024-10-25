// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtoYfm7Ahnl9IWrWmxNj7lwfMOx9yeA_s",
    authDomain: "demofirebase-dbf1e.firebaseapp.com",
    projectId: "demofirebase-dbf1e",
    storageBucket: "demofirebase-dbf1e.appspot.com",
    messagingSenderId: "532771311660",
    appId: "1:532771311660:web:6c559d11ef89745ae8c189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };