import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Profile from './components/Profile'
import ChangePass from './components/ChangePass'
import ForgetPass from './components/ForgetPass'
import VerifyPass from './components/VerifyPass'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/profile" Component={Profile} />
        <Route path="/changePass" Component={ChangePass} />
        <Route path="/forgetPass" Component={ForgetPass} />
        <Route path="/verifyPass" Component={VerifyPass} />
      </Routes>
    </BrowserRouter>
  )
}