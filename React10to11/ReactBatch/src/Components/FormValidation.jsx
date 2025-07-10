import React, { useState } from "react";
import Loader from "./Loader";

export default function FormValidation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [that,setThat]=useState(null)

  const [err, setErr] = useState({});


  setTimeout(() => {
    setThat("THis is heading")
  }, 3000);

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameReg = /^(?=.*[A-Z])[a-zA-Z]{2,8}$/;
    let phoneReg = /^[6-9][0-9]{9}$/;
    let erObj ={one : "",two : ""}

    if (!nameReg.test(name)) {
    //   setErr({
    //     ...err,
    //     one: "Name is not valid",
    //   });
    erObj.one = "Name is not valid";
    } else {
        erObj.one = ""
    //   setErr({
    //     ...err,
    //     one: "",
    //   });
    }
    if (!phoneReg.test(phone)) {
    //   setErr({
    //     ...err,
    //     two: "Phone Number is not valid",
    //   });
    erObj.two = "phone is not valid";
    } else {
        erObj.two = ""
    //   setErr({
    //     ...err,
    //     two: "",
    //   });
    }

    setErr(erObj)
  };
  return (
    <div>

    {
      that ? <h1>{that}</h1> : <Loader/>
    }

      <h1>FormValidation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <span>{err.one}</span>
        <input
          type="text"
          placeholder="Enter your mobile"
          onChange={(e) => setPhone(e.target.value)}
        />
        <span>{err.two}</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


// git add .

// git commit -m "code"

// git push