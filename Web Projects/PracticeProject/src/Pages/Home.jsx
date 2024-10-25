import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import Contact from './Contact';

function Home() {
  const [items, setItems] = useState();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('');

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem('Images')) || [];
    setData(oldData);
    console.log(oldData);
  }, []);

  const handleBtn = () => {
    const files = Array.from(items);
    const newImg = files.map((file) => URL.createObjectURL(file));
    files.forEach((file) => {
      console.log(file.size);
      console.log(file.type);
    })
    localStorage.setItem('Images', JSON.stringify([...data, ...newImg]));
    setData([...data, ...newImg])
  }

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="file"
        multiple
        onChange={(e) => { setItems(e.target.files) }}
      />
      <button onClick={handleBtn}>Upload</button>

      {
        data.map((e, i) => {
          return <img key={i} onClick={() => { setView(e); setLoading(true) }} src={e} alt="" width='200px' />
        })
      }
      {
        loading &&
        <div style={{ inset: '1', backgroundColor: 'black', position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', opacity: '.9' }} >
          <img src={view} alt="" style={{ width: '80%', margin: '0 auto' }} />
        </div>
      }
    </div>
  );
}

export default Home;
