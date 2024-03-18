import React, {useState} from "react";
import "./ForgotPassword.css";
import ContinueButton from "../ContinueButton/ContinueButton.jsx";
import useAxios from "../../hooks/useAxios.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const { postWithoutAuth } = useAxios();

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    // You can perform your login logic here
    console.log('Username:', username);

    const response = await postWithoutAuth("/auth/reset-link", {
      email: username,
    });
    if (!response.isError) {
      
      toast.success("Reset link has been sent to your email!",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
    } else {
        toast.error("Error sending user link. Contact admin.",
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