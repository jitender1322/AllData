import React, { useContext } from 'react'
import { myContext } from './ComOne';

export default function ComThree() {
    const data = useContext(myContext);
    return (
        <div>
            <h1>ComThree</h1>
            <h1>{data}</h1>
        </div>
    )
}
