import React, { useContext, useState, useEffect } from "react";
import "./LoginCard.css";
import LoginButton from "../LoginButton/LoginButton.jsx"

const LoginCard = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // You can perform your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
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
        <p className='admin-card-content'>Forgot Password?</p>
        <LoginButton />
        </div>
        
      </form>
    </div>
  );
}

export default LoginCard;

