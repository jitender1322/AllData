import React, { useEffect, useState } from 'react'

export default function Crud() {

    useEffect(() => {
        let existingData = JSON.parse(localStorage.getItem("Students")) || [];
        setData(existingData)
    }, [])

    const [name, setName] = useState("");
    const [sub, setSub] = useState("");
    const [gender,setGender]=useState()
    const [check,setCheck]= useState([])

    const [editIndex, setEditIndex] = useState(null)

    const [data, setData] = useState([]);

    const handleChange = (e)=>{
      const value = e.target.value;
      // setCheck((prev)=>
      //     prev.includes(value) ? prev.filter((h)=> h !== value) : [...prev, value]
      // )
      setCheck(check.includes(value) ? check.filter((h)=> h !== value) : [...check, value])
    }

    const handleSubmit = () => {
        let obj = {
            name: name,
            subject: sub,
            gender,
            hobby : check
        }
        if (editIndex) {
            let singleData = data[editIndex];
            singleData.name = name
            singleData.subject = sub

            localStorage.setItem("Students", JSON.stringify([...data]))
            setEditIndex(null)
        } else {
            setData([...data, obj])
            localStorage.setItem("Students", JSON.stringify([...data, obj]))
        }
        setName("")
        setSub("")
    }
    const handleDelete = (index) => {
        let remainingData = data.filter((e, i) => i !== index);
        setData(remainingData);
        localStorage.setItem("Students", JSON.stringify(remainingData))
    }

    const handleEdit = (index) => {
        let singleData = data[index]
        setName(singleData.name)
        setSub(singleData.subject)
        setGender(singleData.gender)
        setCheck(singleData.hobby)

        setEditIndex(index);
    }
    return (
      <div>
        {/* Crud - create read update delete */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Subject"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
        />
        <label htmlFor="Gender">Gender</label>
        <pre></pre>male
        <input
          type="radio"
          name="gender"
          value={"Male"}
          checked={gender == "Male"}
          id=""
          onChange={(e) => setGender(e.target.value)}
        />
        female
        <input
          type="radio"
          name="gender"
          id=""
          value={"Female"}
          checked={gender == "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="checkbox"
          name="hobby"
          value={"Dancing"}
          checked={check.includes("Dancing")}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Dancing</label>
        <input
          type="checkbox"
          name="hobby"
          value={"Singing"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Singing</label>
        <input
          type="checkbox"
          name="hobby"
          value={"Reading"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Reading</label>
        <input
          type="checkbox"
          name="hobby"
          value={"Writing"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Writing</label>
        <button onClick={handleSubmit}>
          {editIndex ? "Update" : "Submit"}
        </button>
        <table border="1" width="80%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.subject}</td>
                    <td>{e.gender}</td>
                    <td>{e.hobby.map((e) => ` ${e} `)}</td>
                    <td>
                      <button onClick={() => handleEdit(i)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(i)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>Data not found</p>
            )}
          </tbody>
        </table>
      </div>
    );
}
