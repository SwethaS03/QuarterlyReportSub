import LoginCard from "../components/NewPassword/NewPassword";
import React from "react";
import psg from "/images/psg-logo-name.svg";
import background from "/images/vector.svg";

import "./ForgotPasswordPage.css";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";

function LoginPage() {
  return (
    <div className="default-bg">
      <div className="forgot-pwd-parent-container">
        <div className="forgot-pwd-left-cotainer">
        <img className="forgot-pwd-header-image" src={psg} alt="" />
          <div className='forgot-pwd-top-container'>
            <h2 className='forgot-pwd-h2'>Quarterly Report</h2>
            <h2 className='forgot-pwd-h2-span'>Submission</h2>
          </div>
          < ForgotPassword/>
        </div>
        <div className="forgot-pwd-right-cotainer">
          <img className="forgot-pwd-vector-img" src={background}></img>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
