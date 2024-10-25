import React from 'react'

export default function Session() {
    sessionStorage.setItem("student", "sumit")
    sessionStorage.removeItem("student")
    return (
        <div>Session</div>
    )
}
