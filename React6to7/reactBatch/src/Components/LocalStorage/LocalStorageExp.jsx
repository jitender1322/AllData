import React from 'react'

export default function LocalStorageExp() {

    localStorage.setItem("name", "sumit");

    let user = localStorage.getItem("name")

    console.log(user);

    // localStorage.removeItem("name")

    localStorage.setItem("name2", "akshit")

    // localStorage.removeItem("name2")

    localStorage.clear()

    // json - javascript object notaion

    let obj = {
        name: "sumit",
        subject: "react"
    }

    let obj2 = {
        "name": "sumit",
        "subject": "react"
    }

    localStorage.setItem("student", JSON.stringify(obj))

    let student = JSON.parse(localStorage.getItem("student"));
    console.log(student);




    return (
        <div>LocalStorageExp</div>
    )
}
