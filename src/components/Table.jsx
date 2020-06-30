import React from "react";

const Table = ({ data, deleteUser, edditUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Id</th>
          <th>School</th>
          <th>Eddit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.id}</td>
              <td>{user.school}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => edditUser(user)}
                >
                  Eddit
                </button>
              </td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
