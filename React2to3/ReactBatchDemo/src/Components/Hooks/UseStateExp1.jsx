import React, { useState } from 'react'

export default function UseStateExp1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("rahul")
    const [arr, setArr] = useState([1, 2, 3, "sumit", "pawan", 4, 5]);
    const [obj, setObj] = useState({ name: "kt", subject: "react" })

    const [arrObj, setArrObj] = useState([{ name: "sumit", subject: "react" }, { name: "ruchit", subject: "node" }])

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>UseStateExp1</h1>
            <h1>{count}</h1>
            <button onClick={increase} >Increase</button>
            <button onClick={decrease} >Decrease</button>
            <h1>{name}</h1>

            {
                arr.map((e, i) => {
                    return <p key={i} >{e}</p>
                })
            }

            <p>{obj.name}</p>
            <p>{obj.subject}</p>

            {
                arrObj.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.subject}</li>
                    </ul>
                })
            }

        </div>
    )
}
