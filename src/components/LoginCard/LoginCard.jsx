import React, { useContext, useState, useEffect } from "react";
import "./LoginCard.css";
import LoginButton from "../LoginButton/LoginButton.jsx";
import useAxios from "../../hooks/useAxios.jsx";
import { usePersistState } from "../../hooks/usePersistState.jsx";
const LoginCard = ({ onLogin }) => {
  const { postWithoutAuth } = useAxios();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = usePersistState("USER", {});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await postWithoutAuth("/auth/login", {
      email: username,
      password,
    });
    if (!response.isError) {
      onLogin(response.data.userObject.role);
      setUser(response.data);
      localStorage.setItem("AUTH_TOKEN", response.data.token);
    } else {
      alert("Invalid Username or Password");
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
          </div><br/>
          <LoginButton />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
