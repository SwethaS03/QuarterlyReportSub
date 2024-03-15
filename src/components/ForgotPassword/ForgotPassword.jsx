import React, {useState} from "react";
import "./ForgotPassword.css";
import ContinueButton from "../ContinueButton/ContinueButton.jsx";

const ForgotPassword = () => {
    const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };


  const handleSubmit = event => {
    event.preventDefault();
    // You can perform your login logic here
    console.log('Username:', username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="logincard">
            <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <ContinueButton />
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;