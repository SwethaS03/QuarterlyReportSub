import AddDepartmentPage from "../pages/AddDepartmentPage";
import AdminPage from "../pages/AdminPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import DownloadPage from "../pages/DownloadPage";
import ModifyPage from "../pages/ModifyOrderPage";
import QuarterAdminPage from "../pages/QuarterAdminPage";
export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/add-department" element={<AddDepartmentPage />} />
      <Route path="/download" element={<QuarterAdminPage />} />
      <Route path="/modify-order" element={<ModifyPage />} />
      <Route path="/download/:year/:quarter" element={<DownloadPage />} />
    </Routes>
  );
}
