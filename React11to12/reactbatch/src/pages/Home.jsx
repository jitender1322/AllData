import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const data = useLocation()
  console.log(data?.state?.name);
  
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/about/rahul"}>Go to About Page</Link>
    </div>
  );
}
