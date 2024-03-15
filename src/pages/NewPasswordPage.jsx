import LoginCard from "../components/NewPassword/NewPassword";
import React from "react";
import psg from "/images/psg-logo-name.svg";
import background from "/images/vector.svg";

import "./NewPasswordPage.css";
import NewPassword from "../components/NewPassword/NewPassword";
import { useParams } from "react-router-dom";

function LoginPage() {
  const { token } = useParams();
  console.log(token);
  return (
    <div className="default-bg">
      <div className="new-pwd-parent-container">
        <div className="new-pwd-left-cotainer">
        <img className="new-pwd-header-image" src={psg} alt="" />
          <div className='new-pwd-top-container'>
            <h2 className='new-pwd-h2'>Quarterly Report</h2>
            <h2 className='new-pwd-h2-span'>Submission</h2>
          </div>

          <NewPassword/>
        </div>
        <div className="new-pwd-right-cotainer">
          <img className="new-pwd-vector-img" src={background}></img>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
