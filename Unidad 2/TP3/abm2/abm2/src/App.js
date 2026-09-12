import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const adduser = () => {
    if (name.trim() === "") return;
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = name;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, name]);
    }
    setName("");
  };

  const editUser = (index) => {
    setName(users[index]);
    setEditingIndex(index);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="crud-container">
      <h2 className="crud-title">Reat CRUD App</h2>
      <div className="input-group">
        <input
          className="crud-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Here"
        />
        <button className="crud-button add" onClick={adduser}>
          {editingIndex !== null ? "Update " : "Add"}
        </button>
      </div>

      <ul className="crud-list">
        {users.map((user, index) => (
          <li key={index} className="crud-item">
            <span className="crud-text">{user}</span>

            <div className="button-group">
              <button
                className="crud-button edit"
                onClick={() => editUser(index)}
              >
                Edit
              </button>

              <button
                className="crud-button delete"
                onClick={() => deleteUser(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
