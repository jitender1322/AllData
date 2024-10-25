import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './feature/Todoslice';

export default function Todo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [])
    const record = useSelector((state) => {
        return state.todoKey
    })
    return (
        <div>
            {
                record.data &&
                record.data.map((e, i) => {
                    return <ul key={i} >
                        <li>{e.title}</li>
                        <li>{e.price}</li>
                    </ul>
                })
            }
        </div>
    )
}
