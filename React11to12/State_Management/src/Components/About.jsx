import React, { useContext } from 'react'
import { themeContext } from '../App';

export default function About() {
    const value = useContext(themeContext)
        console.log(value);
  return (
    <div>About</div>
  )
}
