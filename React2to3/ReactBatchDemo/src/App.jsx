import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./firebase/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./firebase/Signin";
import Dashboard from "./firebase/Dashboard";
import Crud from "./Components/LocalStorage/Crud";

export default function App() {
  return (
    <div>
      <Signup/>
    </div>
  );
}
