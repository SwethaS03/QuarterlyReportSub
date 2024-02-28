import "./App.css";
import AddDepartmentPage from "./pages/AddDepartmentPage";
import AdminPage from "./pages/AdminPage";
import DownloadPage from "./pages/DownloadPage";
import LoginPage from "./pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import QuarterAdminPage from "./pages/QuarterAdminPage";
import QuarterRepPage from "./pages/QuarterRepPage";
import AdminCard from "./pages/AdminPage";

function App() {
  return (
    <AdminPage />
    // <Routes>
    //   <Route path="/">
    //     <Route index element={<Navigate to="/login" />} />
    //     <Route path="selector" element={<QuarterRepPage />} />
    //   </Route>
    //   <Route path="/admin">
    //     <Route path="" element={<AddDepartmentPage />} />
    //     <Route path="modify-order" /*Modify Order Page */ />
    //     <Route path="add-department" element={<AddDepartmentPage />} />
    //     <Route path="selector" element={<AddDepartmentPage />} />
    //     <Route path="selector/:year/:quarter" element={<DownloadPage />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
