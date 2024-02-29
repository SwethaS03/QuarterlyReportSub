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
      <div className="add-department-parent-container">

        <div className="add-department-left-cotainer">

          <div className="add-department-title-container">
            <h3 className='add-department-h3'>ADMIN</h3>
            <h1 className='add-department-h1'>Add Department</h1>
          </div>
          <div className='add-dept'>
            <AddDeptCard />
          </div>
        </div>
        <div className="add-department-right-cotainer">
          <ExistingUsersCard />
        </div>
      </div>
    </div>
  );
}

export default AddDepartmentPage;
