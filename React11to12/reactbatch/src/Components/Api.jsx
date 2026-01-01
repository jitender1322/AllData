import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Api() {
  const [record, setRecord] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  // const fetchApi = async ()=>{
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const res = await response.json()
  //     console.log(res);
  // }

  const fetchApi = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setRecord(response.data);
  };

  return (
    <div>
      <h1>Api</h1>
      {record ? (
        record.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.title}</li>
            </ul>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}
