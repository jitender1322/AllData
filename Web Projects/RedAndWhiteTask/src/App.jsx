import React from 'react'
import TodoList from './Todo/TodoList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Todo/Login'
import SignIn from './Todo/SignIn'
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} ></Route>
          <Route path='/signIn' Component={SignIn} ></Route>
          <Route path='/todo' Component={TodoList} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
