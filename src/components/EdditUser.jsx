import React, { useState } from "react";

const EdditUser = ({ currentUser, setEditing, updateUser }) => {
  console.log(currentUser);
  const [user, setUser] = useState(currentUser);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChangeInput}
      />
      <br />
      <label>Age</label>
      <input
        type="number"
        name="age"
        min="16"
        max="18"
        value={user.age}
        onChange={handleChangeInput}
      />
      <br />
      <label>School</label>
      <input
        type="text"
        name="school"
        value={user.school}
        onChange={handleChangeInput}
      />
      <button>Update user</button>
      <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EdditUser;
