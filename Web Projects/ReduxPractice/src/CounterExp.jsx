import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feature/CounterSlice'

export default function CounterExp() {
    const data = useSelector((state) => {
        return state.counterKey
    })
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{data.count}</h1>
            <h1>{data.num}</h1>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())} >-</button>
        </div>
    )
}
