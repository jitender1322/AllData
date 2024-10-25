import React from 'react'

export default function FunctionTwo(props) {
    console.log(props);
    function hello(num) {
        console.log(num);
    }
    return (
        <div>
            <h1>FunctionTwo</h1>
            <h1>{props.num}</h1>
            <button onClick={() => hello(props.num)} >+</button>
        </div>
    )
}
