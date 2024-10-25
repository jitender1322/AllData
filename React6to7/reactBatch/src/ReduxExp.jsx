import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './features/CounterSlice';

export default function ReduxExp() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [])
    const data = useSelector((state) => {
        return state.ConterKey
    })
    if (data.loading) {
        return <h1>Loading</h1>
    }
    return (
        <div>
            <h1>Redux Api</h1>
            {
                data.products.map((e, i) => {
                    return <h1 key={i} >{e.title}</h1>
                })
            }
        </div>
    )
}
