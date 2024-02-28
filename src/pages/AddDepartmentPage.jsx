import AddButton from "../components/AddButton/AddButton";
import AddDeptCard from "../components/AddDeptCard/AddDeptCard";
import NavbarBackAndLogout from "../components/NavbarBack&Logout/NavbarBack&Logout";
import ExistingUsersCard from "../components/ExistingUsersCard/ExistingUsersCard";
import React from "react";
import "./AddDepartmentPage.css"

function AddDepartmentPage() {
  return (
    <div className="default-bg">
      <NavbarBackAndLogout />
      <div className="parent-container">

        <div className="left-cotainer">

          <div className="title-container">
            <h3>ADMIN</h3>
            <h1>Add Department</h1>
          </div>
          <div className='add-dept'>
            <AddDeptCard />
          </div>
        </div>
        <div className="right-cotainer">
          <ExistingUsersCard />
        </div>
      </div>
    </div>
  );
}

export default AddDepartmentPage;
