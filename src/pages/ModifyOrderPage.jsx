import { ToastContainer, toast } from "react-toastify";
import ModifyButton from "../components/ModifyButton/ModifyButton";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";
import OrderCard from "../components/OrderCard/OrderCard";
import useAxios from "../hooks/useAxios";
import "./ModifyOrderPage.css";
import React, { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
function ModifyPage() {
  const { getWithAuth } = useAxios();
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await getWithAuth("/user/order");
    if (!response.isError) {
      setUsers(response.data);
    } else {
      toast.success("Error fetching data", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        newestOnTop: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="default-bg">
      <ToastContainer stacked />
      <Navbar />
      <div className="modify-order-container">
        <div className="modify-order-title-container">
          <h3 className="modify-order-h3">ADMIN</h3>
          <h2 className="modify-order-h2">Modify User Order</h2>
        </div>
        <div className="modify-order-cards">
          {users.map((user, index) => (
            <OrderCard user={user} key={index} fetchData={fetchData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModifyPage;
