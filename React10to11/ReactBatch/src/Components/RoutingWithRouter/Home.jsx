import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Home() {

  const data = useLocation()
  console.log(data?.state?.name);
  
  const student = "puneet"

  return (
    <div>
      <h1>Home</h1>
      <Link to={`/about/${student}`} >Go To About</Link>
      <Link to={"/contact"} >Go To Contact</Link>
    </div>
  );
}
