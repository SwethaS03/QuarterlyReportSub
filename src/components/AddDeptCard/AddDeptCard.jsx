import React, { useContext, useState, useEffect } from "react";
import "./AddDeptCard.css";
import AddButton from "../AddButton/AddButton.jsx";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios.jsx";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      toast.success("User Added Successfully!",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
    } else {
      toast.error("Invalid Username or Password",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ToastContainer stacked />
        <div className="addDept-logincard">
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
