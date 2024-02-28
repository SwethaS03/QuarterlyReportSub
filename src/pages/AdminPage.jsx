import AdminCards from "../components/AdminCards/AdminCards";
import NavbarLogout from "../components/NavbarLogout/NavbarLogout";
import "./AdminPage.css"
//import "../index.css";

function AdminPage() {
  return (
      <div className='default-bg'>
        <NavbarLogout/>
          <div className='text-card-container'>
            <div className='text-container'>
              <h2>Admin</h2>
              <hr className="card-line" />
            </div>
            <div className="admin-cards">
            <AdminCards />
            </div>
          </div>
          
      </div>
      
  );
}

export default AdminPage;