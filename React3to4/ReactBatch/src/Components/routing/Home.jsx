import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/about"}>Go to About page</Link>
      <Link to={"/contact"}>Go to Contact page</Link>
    </div>
  );
}
