import React, { useState, useEffect } from "react";
import "./ExistingUsersCard.css";
import { useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";

const ExistingUsersCard = () => {
  const navigate = useNavigate();
  const { getWithAuth } = useAxios();
  const [existingUsers, setExistingUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await getWithAuth("/user");
    if (!response.isError) {
      setExistingUsers(response.data);
    } else {
      'react-toastify/dist/ReactToastify.css';
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="userCard">
      <h2>Departments</h2>
      <div className="user-list">
        {existingUsers.map((user, index) => {
          return (
            <div key={index}>
              <div className="list-container">
                <p>{user.email}</p>
                <p>{user.role}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExistingUsersCard;
