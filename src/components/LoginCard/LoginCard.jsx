import React, { useContext, useState, useEffect } from "react";
import "./LoginCard.css";
import LoginButton from "../LoginButton/LoginButton.jsx";
import useAxios from "../../hooks/useAxios.jsx";
import { usePersistState } from "../../hooks/usePersistState.jsx";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
      toast.success("User logged in successfully",
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
        <div>
          <ToastContainer stacked/>
        </div>
        <div className="logincard">
          <div className="login-card-form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="login-card-form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <a href="/forgot-password" className='login-forgot-password'>Forgot Password?</a>
          </div>
        
          <LoginButton />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
