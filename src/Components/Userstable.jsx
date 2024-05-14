import React from "react";

function Userstable() {
  // Define fixed values for full names, status, and created at
  const fullNames = ["New User", "Krishna Dolas", "Alex Johnson"];
  const status = "In Progress";
  const createdAt = new Date();
  createdAt.setDate(createdAt.getDate() - 2); // Adjust to 2 days ago

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Status</th>
          <th scope="col">Created At</th>
        </tr>
      </thead>
      <tbody>
        {/* Render each user */}
        {fullNames.map((fullName, index) => (
          <tr key={index}>
            <td>{fullName}<br />Developer</td>
            <td>{status}</td>
            <td>{createdAt.toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Userstable;
