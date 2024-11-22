import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Contact() {
  // const record = useParams();
  const data = useLocation();
  return (
    <div>
      <h1>Contact</h1>
      <h4>{data?.state?.name}</h4>
      <h4>{data?.state?.subject}</h4>
      <h4>{data?.state?.city}</h4>
    </div>
  );
}
