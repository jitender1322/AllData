import React from "react";
import { Link } from "react-router-dom";

export default function Read({ data }) {
  return (
    <div>
      <h1>Read</h1>
      <Link to={"/create"}>Create</Link>
      <Link to={"/delete"}>Delete</Link>
      <Link to={"/update"}>Update</Link>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SUBJECT</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.subject}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
