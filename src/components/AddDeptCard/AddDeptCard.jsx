import React, { useContext, useState, useEffect } from "react";
import "./AddDeptCard.css";
import AddButton from "../AddButton/AddButton.jsx"

const AddDeptCard = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [section, setSection] = useState('');

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSectionChange = event => {
        setSection(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Section:', section);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="logincard">
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                </div>
                <div className="form-group">
                <input
                    type="section"
                    placeholder="Section"
                    value={section}
                    onChange={handleSectionChange}
                />
                </div>
                <AddButton />
        </div>
        
      </form>
    </div>
  );
}

export default AddDeptCard;

