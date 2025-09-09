import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/CounterSlice'
import { FetchApi } from './features/apiSlice'

export default function ReducCounter() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(FetchApi())
  },[])

  const record = useSelector((state)=>{
    return state.apiKey
  })
  console.log(record);
  

  if(record.loading == true){
    return <p>Loading...</p>
  }

  return (
    <div>
      {
        record.data.map((e,i)=>{
          return <ul key={i}>
            <li>{e.title}</li>
          </ul>
        })
      }
    </div>
  ); 
}
