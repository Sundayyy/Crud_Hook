import React, { useState, useCallback } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import EdditUser from "./components/EdditUser";

function App() {
  const initialFormState = {
    name: "",
    age: null,
    id: null,
    school: "",
  };

  const initialState = [
    {
      name: "Pham Binh Minh",
      age: 17,
      id: 1,
      school: "THPT Xuan Truong",
    },
    {
      name: "Nguyen Van Troi",
      age: 16,
      id: 2,
      school: "THPT Phu Yen",
    },
    {
      name: "Truong Thi Thu Thuy",
      age: 17,
      id: 3,
      school: "THPT Cao Phong",
    },
  ];

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const [data, setData] = useState(initialState);

  const [editing, setEditing] = useState(false);

  const addUsers = (newData) => {
    newData.id = data.length + 1;
    setData([...data, newData]);
  };

  const deleteUser = useCallback(
    (id) => {
      setData(data.filter((user) => user.id !== id));
    },
    [data]
  );

  const edditUser = useCallback((user) => {
    setEditing(true);

    setCurrentUser({
      name: user.name,
      age: user.age,
      id: user.id,
      school: user.school,
    });
  }, []);

  const updateUser = useCallback(
    (id, updateUser) => {
      setEditing(false);
      setData(data.map((user) => (user.id === id ? updateUser : user)));
    },
    [data]
  );

  return (
    <div className="container">
      <div className="flex-row">
        {editing ? (
          <div>
            <h1>Eddit User </h1>
            <EdditUser
              currentUser={currentUser}
              updateUser={updateUser}
              setEditing={setEditing}
            />
          </div>
        ) : (
          <div className="form">
            <h1>Add Users</h1>
            <Form addUsers={addUsers} initialFormState={initialFormState} />
          </div>
        )}
      </div>
      <div className="flex-large">
        <h1>Users Table</h1>
        <Table data={data} deleteUser={deleteUser} edditUser={edditUser} />
      </div>
    </div>
  );
}

export default App;
