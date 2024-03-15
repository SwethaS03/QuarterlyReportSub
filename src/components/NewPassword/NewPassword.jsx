import React, {useState}from "react";
import "./NewPassword.css";
import ContinueButton from "../ContinueButton/ContinueButton.jsx";

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password === confirmPassword) {
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        setPasswordMatchError(false);
      } else {
        setPasswordMatchError(true);
      }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="logincard">
            <div className="form-group">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
           <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          /> 
        </div>
        {passwordMatchError && <p className="error">Passwords do not match</p>
        }
        <ContinueButton />
        </div>
      </form>
    </div>
  );
}

export default NewPassword;