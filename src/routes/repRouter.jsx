import QuarterRepPage from "../pages/QuarterRepPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

export default function RepRouter() {
  return (
    <Routes>
      <Route path="/" element={<QuarterRepPage />} />
      {/* <Route path="/representative">
        <Route path="/" element={<QuarterRepPage />} />
      </Route> */}
    </Routes>
  );
}
