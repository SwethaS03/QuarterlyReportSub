import React from 'react';
import "./ModifyButton.css";

const ModifyButton = () => {
    const handleClick = () => {
        // Handle login logic here
    };

    return (
        <button onClick={handleClick} className="button">
            Modify
        </button>
    );
};

export default ModifyButton;