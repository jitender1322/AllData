import React, { useContext } from 'react'
import { themeContext } from '../App'

export default function Home() {

    const value = useContext(themeContext)
    console.log(value);
    
  return (
    <div style={{backgroundColor : value=='dark' ? "white" : "black" }}>Home</div>
  )
}
