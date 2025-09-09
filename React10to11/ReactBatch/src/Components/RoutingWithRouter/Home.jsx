import React, { createContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Contact from './Contact';

export const mycontext = createContext()

export default function Home() {
  const data = useLocation()
  console.log(data?.state?.name);
  
  const student = "puneet"

  return (
    <div>
      <h1>Home</h1>

      <mycontext.Provider value={"rahul"}>
        <Contact/>
      </mycontext.Provider>


      {/* <Link to={`/about/${student}`} >Go To About</Link>
      <Link to={"/contact"} >Go To Contact</Link> */}
    </div>
  );
}
