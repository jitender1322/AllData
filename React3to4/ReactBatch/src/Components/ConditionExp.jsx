import React, { useState } from 'react'

export default function ConditionExp() {
    let [data, setData] = useState(null);

    setTimeout(() => {
        setData("sumit")
    }, 8000);
    return (
        <div>
            <h1>ConditionExp</h1>
            <h1>{data ? data : "loading..."}</h1>
            {data && <h1>{data}</h1>}
        </div>
    )
}
