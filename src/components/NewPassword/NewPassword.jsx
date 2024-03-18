import React, {useState}from "react";
import "./NewPassword.css";
import ContinueButton from "../ContinueButton/ContinueButton.jsx";
import useAxios from "../../hooks/useAxios.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewPassword = ({email}) => {
    const { postWithoutAuth } = useAxios();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    

    if (password === confirmPassword) {
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        if (password.length > 7) {
          const response = await postWithoutAuth("/auth/reset-password", {
      email,
      NewPassword:password,

    });
    if (!response.isError) {
      if (response.data.status === "success"){
      toast.success("Password has been changed successfully!",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
      }
      else{
        toast.error(response.data.message,
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
      }
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
      } else {
        alert("Password length less than 7 characters!");
      }
        setPasswordMatchError(false);
      } else {
        setPasswordMatchError(true);
      }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <ToastContainer stacked/>
        </div>
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