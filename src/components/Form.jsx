import React, { useState } from "react";

const Form = ({ addUsers, initialFormState }) => {
  const [newUser, setNewUser] = useState(initialFormState);

  // handle Function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      newUser.name.trim() === "" ||
      newUser.school.trim() === "" ||
      newUser.age > 18
    )
      return;

    const newData = {
      name: newUser.name,
      age: newUser.age,
      id: newUser.id,
      school: newUser.school,
    };

    addUsers(newData);

    setNewUser({
      name: "",
      age: null,
      id: null,
      school: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inline-block">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="User Name ..."
          value={newUser.name}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="inline-block">
        <label>Age</label>
        <input
          type="number"
          name="age"
          min="16"
          max="18"
          placeholder="Age.."
          value={newUser.age}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="inline-block">
        <label>School</label>
        <input
          type="text"
          name="school"
          placeholder="School Name ..."
          value={newUser.school}
          onChange={handleChange}
        />
      </div>

      <button>Add new User</button>
    </form>
  );
};

export default Form;
