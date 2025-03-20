import React from "react";
import Api from "./JSONServer/Api";
import Dashboard from "./Firebase/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Firebase/SignUp";
import LogIn from "./Firebase/LogIn";

export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" Component={SignUp}></Route>
      <Route path="/logIn" Component={LogIn}></Route>
      <Route path="/dashboard" Component={Dashboard}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
