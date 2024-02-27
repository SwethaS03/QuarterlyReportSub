import React from 'react';
import "./ExistingUsersCard.css";

const ExistingUsersCard = () => {
    const handleClick = () => {
        // Handle login logic here
    };

    return (
        
        <div className="userCard">
            <h2>Departments</h2>
                <div className="user-list">
                    <div className='list-container'>
                        <p>principal@psgtech.ac.in</p>
                        <p>Admin</p>
                    </div>
                    <hr />
                    <div className='list-container'>
                        <p>vsk@psgtech.ac.in</p>
                        <p>Admin</p>
                    </div>
                    <hr />
                    <div className='list-container'>
                        <p>sugunapsg@gmail.com</p>
                        <p>MoU Details</p>
                    </div>
                    <hr />
                    <div className='list-container'>
                        <p>coe@psgtech.ac.in</p>
                        <p>Controller Of Examinations</p>
                    </div>
                    <hr />
                    <div className='list-container'>
                        <p>dean.pat@psgtech.ac.in</p>
                        <p>Placement and Training</p>
                    </div>
                    <hr />
                    <div className='list-container'>
                        <p>dean.acad@psgtech.ac.in</p>
                        <p>Academic Section</p>
                    </div>
                    <hr />
                    <div className='list-container'>
                        <p>acs@psgtech.ac.in</p>
                        <p>Accounts</p>
                    </div>
                    <hr />
                    <div className='list-container'>
                        <p>dean.admn@psgtech.ac.in</p>
                        <p>Admin</p>
                    </div>

                </div>
            </div>
        
    );
};

export default ExistingUsersCard;