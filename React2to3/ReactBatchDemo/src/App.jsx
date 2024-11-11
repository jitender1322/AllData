import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './firebase/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './firebase/Signin';
import Dashboard from './firebase/Dashboard';

export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Signup} ></Route>
        <Route path='/signin' Component={Signin} ></Route>
        <Route path='/dashboard' Component={Dashboard} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
