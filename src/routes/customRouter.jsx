import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { usePersistState } from "../hooks/usePersistState";
import LoginPage from "../pages/LoginPage";

import PrivateRoute, { PrivateHomeRoute } from "./privateRoute";
import AdminRouter from "./adminRouter";
import RepRouter from "./repRouter";
import NewPasswordPage from "../pages/NewPasswordPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

export default function CustomRouter() {
  const [user, setUser] = usePersistState("USER", {});
  const [role, setRole] = useState(user.role);
  useEffect(() => {
    if ("userObject" in user) {
      setRole(user.userObject.role);
    }
  }, []);
  const navigate = useNavigate();
  const onLogin = (role) => {
    setRole(role);
    setTimeout(() => {
      navigate("/"); // to change
    }, 300);
  };

  const RouterPath = useCallback(() => {
    switch (role) {
      case "Admin":
        return <AdminRouter />;
      case "Representative":
        return <RepRouter />;
    }
  }, [role]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PrivateHomeRoute>
            <LoginPage onLogin={onLogin} />
          </PrivateHomeRoute>
        }
      />
      <Route 
        path='/forgot-password'
        element={<ForgotPasswordPage />}
      />
      <Route
        path='/reset-password/:token' 
        element={<NewPasswordPage />}
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <RouterPath />
          </PrivateRoute>
        }
      />
      
    </Routes>
  );
}
