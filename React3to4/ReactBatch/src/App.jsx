import React from "react";
import SignUp from "./Firebase/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Firebase/LogIn";
import Dashboard from "./Firebase/Dashboard";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp}></Route>
          <Route path="/login" Component={LogIn}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
