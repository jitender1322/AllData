import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../firebaseconfig";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    let user = await createUserWithEmailAndPassword(auth, email, password).then(
      (data) => {
        setDoc(doc(db, "Users", data.user.uid), {
          name,
          city,
          age,
          email,
        });
        navigate("/dashboard");
      }
    );
  };

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <h1>SignUp</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your City"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <span>
        <Link to={"/login"}>LogIn ?</Link>
      </span>

      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}
