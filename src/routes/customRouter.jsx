import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { usePersistState } from "../hooks/usePersistState";
import LoginPage from "../pages/LoginPage";

import PrivateRoute, { PrivateHomeRoute } from "./privateRoute";
import AdminRouter from "./adminRouter";
import RepRouter from "./repRouter";

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
      case "admin":
        return <AdminRouter />;
      case "representative":
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
