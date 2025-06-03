import React from 'react'

export default function ArrayOfObj({id,name,subject}) {

    // const singleData = arr.find((item)=>item.id == 3);

    // const filteredData = arr.filter((item)=>item.id != 4)

  return (
    <div>
      <h1>ArrayOfObj</h1>
             <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{subject}</li>
            </ul>
       
    </div>
  );
}
