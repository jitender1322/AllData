import React from "react";
import SignUp from "./firebase/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./firebase/LogIn";
import Dashboard from "./firebase/Dashboard";

export default function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/"  Component={SignUp} ></Route>
      <Route path="/login"  Component={LogIn} ></Route>
      <Route path="/dashboard"  Component={Dashboard} ></Route>
    </Routes>
   </BrowserRouter>
    </>
  );
}
