import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function App() {
  const [image, setImage] = useState("")
  const [record, setRecord] = useState(null);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let response = await axios.get("http://localhost:1008")
    console.log(response.data);
    setRecord(response.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append("image", image)
    let sendImage = await axios.post("http://localhost:1008/addImage", formdata)
    console.log(sendImage);
  }
  return (
    <div>
      <h1>Image Gallery</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} />
        <button type='submit'>Submit</button>
      </form>
      {
        record &&
        record.map((e, i) => {
          return <img src={`http://localhost:1008/${e.image}`} width={"20%"} key={i} alt="" />
        })
      }
    </div>
  )
}
