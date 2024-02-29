import AdminCards from "../components/AdminCards/AdminCards";
import NavbarLogout from "../components/NavbarLogout/NavbarLogout";
import "./AdminPage.css"
//import "../index.css";

function AdminPage() {
  return (
      <div className='default-bg'>
        <NavbarLogout/>
          <div className='admin-page-text-card-container'>
            <div className='admin-page-text-container'>
              <h2 className='admin-page-h2'>Admin</h2>
              <hr className="admin-page-card-line" />
            </div>
            <div className="admin-cards">
            <AdminCards />
            </div>
          </div>
          
      </div>
      
  );
}

export default AdminPage;