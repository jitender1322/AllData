import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../features/ApiSlice';

export default function ReduxApi() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi())
    }, [])

    const record = useSelector((state) => {
        return state.apiKey
    })

    if (record.loading) {
        return <p>loading</p>
    }
    return (
        <div>
            <h1>ReduxApi</h1>
            {
                record.data &&
                record.data.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.title}</li>
                        <li>{e.price}</li>
                    </ul>
                })
            }
        </div>
    )
}
