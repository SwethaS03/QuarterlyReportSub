import React, { useContext, useState, useEffect } from "react";
import "./AddDeptCard.css";
import AddButton from "../AddButton/AddButton.jsx";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios.jsx";

const AddDeptCard = () => {
  const navigate = useNavigate();
  const { postWithAuth } = useAxios();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("");
  const [order, setOrder] = useState(0);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: username,
      role: "Representative",
      password: password,
      department: section,
      order: order,
    };

    const response = await postWithAuth("/user", data);
    if (!response.isError) {
      alert("User added successfully");
    } else {
      alert("Error adding user");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="logincard">
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Section"
              value={section}
              onChange={handleSectionChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Order"
              value={order}
              onChange={handleOrderChange}
            />
          </div>
          <AddButton />
        </div>
      </form>
    </div>
  );
};

export default AddDeptCard;
