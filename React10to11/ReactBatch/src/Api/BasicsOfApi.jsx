import axios from 'axios'
import React, { useEffect } from 'react'

export default function BasicsOfApi() {

    useEffect(()=>{
        fetchApi()
    },[])

    // const fetchApi = async ()=>{
    //     let response = await fetch("https://fakestoreapi.com/products")
    //     let data = await response.json()
    //     console.log(data);
    // }

    const fetchApi = async ()=>{
        await axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data);
        })
    }

  return (
    <div>
      <h1>BasicsOfApi</h1>
    </div>
  );
}
