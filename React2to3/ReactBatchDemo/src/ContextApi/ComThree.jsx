import React, { useContext } from 'react'
import { myContext } from './ComOne'

export default function ComThree() {
    const count = useContext(myContext)
    return (
        <div>
            <h1>ComThree {count}</h1>
        </div>
    )
}
