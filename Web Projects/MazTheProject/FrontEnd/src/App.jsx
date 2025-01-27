import React from 'react'
import HomeBanTwo from './Components/HomeBanTwo'
import HomeBanThree from './Components/HomeBanThree'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'

export default function App() {
  return (
    <div>
      <Navbar />
      <SignUp />
      <Footer />
      {/* <HomeBanThree /> */}
      {/* <HomeBanTwo /> */}
    </div>
  )
}
