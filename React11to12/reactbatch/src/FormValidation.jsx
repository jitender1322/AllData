import React, { useState } from 'react'

export default function FormValidation() {
    const [pass,setPass]=useState("")
    const [err,setErr] = useState("")

    const handleSubmit = ()=>{
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if(regex.test(pass)){
            setErr("The password is strong")
        }else{
            setErr("The password is weak")
        }
    }
  return (
    <div>
      <h1>FormValidation</h1>
      <input type="text" placeholder='Enter your password' onChange={(e)=>setPass(e.target.value)}/>
      <span>{err}</span>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
