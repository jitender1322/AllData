import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './firebase/SignUp'
import LogIn from './firebase/LogIn'
import Dashboard from './firebase/Dashboard'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp} ></Route>
          <Route path='/login' Component={LogIn} ></Route>
          <Route path='/dashboard' Component={Dashboard} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
