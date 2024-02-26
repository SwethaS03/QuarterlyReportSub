import React from 'react';
import "./LoginButton.css";

const LoginButton = () => {
    const handleClick = () => {
        // Handle login logic here
    };

    return (
        <button onClick={handleClick} className="button">
            Login
        </button>
    );
};

export default LoginButton;