import AddDepartmentPage from "../pages/AddDepartmentPage";
import AdminPage from "../pages/AdminPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import DownloadPage from "../pages/DownloadPage";
import ModifyPage from "../pages/ModifyOrderPage";
export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/add-department" element={<AddDepartmentPage />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/modify-order" element={<ModifyPage />} />
    </Routes>
  );
}
