import React from 'react';
import "./ContinueButton.css";

const ContinueButton = () => {
    const handleClick = () => {
        // Handle login logic here
    };

    return (
        <button onClick={handleClick} className="continue-button">
            Continue
        </button>
    );
};

export default ContinueButton;