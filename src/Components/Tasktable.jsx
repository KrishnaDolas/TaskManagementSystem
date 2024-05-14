import React, { useState } from "react";
import jsonData from "../data/data.json";

function Table() {
  // Use state to manage your data
  const [data, setData] = useState(jsonData);

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Task_Name</th>
            <th scope="col">Assigned to</th>
            <th scope="col">Team</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={index}>
              <td>{record.Task_Name}</td>
              <td>{record.Assigned_to}</td>
              <td>{record.Team}</td>
              <td>{record.Priority}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
