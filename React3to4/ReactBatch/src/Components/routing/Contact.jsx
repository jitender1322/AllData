import React, { useContext } from "react";
import { myContext } from "./Home";

export default function Contact() {
  const data = useContext(myContext);
  console.log(data);

  return (
    <div>
      <h1>Contact {data}</h1>
    </div>
  );
}
