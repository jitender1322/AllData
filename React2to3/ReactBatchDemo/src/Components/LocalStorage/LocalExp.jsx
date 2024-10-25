import React from 'react'

export default function LocalExp() {
    localStorage.setItem("name", "student")
    localStorage.setItem("name2", "student2")

    let data = localStorage.getItem("name");
    console.log(data);

    localStorage.removeItem("name")

    let obj = { name: "sumit", subject: "react" };

    localStorage.setItem("myObj", JSON.stringify(obj));

    let objData = JSON.parse(localStorage.getItem("myObj"))
    console.log(objData);

    return (
        <div>LocalExp</div>
    )
}
