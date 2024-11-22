import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  const obj = {
    name: "sumit",
    subject: "react",
    city: "rajkot",
  };
  const handleClick = () => {
    navigate("/contact", { replace: true, state: obj });
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Contact</button>
    </div>
  );
}
