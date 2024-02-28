import LoginCard from "../components/LoginCard/LoginCard";
import React from "react";
import psg from "/images/psg-logo-name.svg";
import background from "/images/vector.svg";

import "./LoginPage.css"

function LoginPage() {
  return (
    <div className='default-bg'>
      <img className='psg-image' src={psg}></img>
      <div className="parent-container">

        <div className="left-cotainer">

          <div className='img-container'>
            <LoginCard />
          </div>
        </div>
        <div className="right-cotainer">
          <img className='vector-img' src={background}></img>
        </div>
      </div>
    </div>
  );
};





export default LoginPage;
