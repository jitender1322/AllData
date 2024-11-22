import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebaseconfig";

export default function Login() {
  const handleLogin = async () => {
    await signInWithPopup(auth, provider).then((user) => {
      console.log(user);
    });
  };
  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={handleLogin}>Log In/Sign In</button>
    </div>
  );
}
