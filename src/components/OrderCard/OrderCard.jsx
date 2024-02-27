import React from 'react';
import "./OrderCard.css";

const OrderCard = () => {
    const handleClick = () => {
        // Handle login logic here
    };

    return (
        
        <div className="card">
            <div className="text">
                <h2>Admin</h2>
                <p>Principal</p>
            </div>
            <div className="card-number">
                <span>0</span>
            </div>
        </div>
        
    );
};

export default OrderCard;