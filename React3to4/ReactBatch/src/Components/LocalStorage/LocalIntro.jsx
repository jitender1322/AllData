import React from 'react'

export default function LocalIntro() {
    localStorage.setItem("student","sumit");
    sessionStorage.setItem("student","rahul")
    
  return (
    <div>LocalIntro</div>
  )
}
