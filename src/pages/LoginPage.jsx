import LoginCard from "../components/LoginCard/LoginCard";
import React from "react";
import psg from "/images/psg-logo-name.svg";
import background from "/images/vector.svg";

import "./LoginPage.css";

function LoginPage({ onLogin }) {
  return (
    <div className="default-bg">
      <div className="login-parent-container">
        <div className="login-left-cotainer">
        <img className="login-header-image" src={psg} alt="" />
          <div className='login-top-container'>
            <h2 className='login-h2'>Quarterly Report</h2>
            <h2 className='login-h2-span'>Submission</h2>
          </div>

          <LoginCard onLogin={onLogin} />
        </div>
        <div className="login-right-cotainer">
          <img className="login-vector-img" src={background}></img>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
