import React, { useCallback, useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

import AdminRouter from "./adminRoute"
import UserRoute from "./userRoute"
import { usePersistState } from "../hooks/usePersistState"
import LoginPage from "../pages/LoginPage"

import PrivateRoute, { PrivateHomeRoute } from "./privateRoute"

export default function CustomRouter() {
  const [user] = usePersistState('USER', {})
  const [role, setRole] = useState(user.role)

  useEffect(() => {
    setRole(user.role)
  }, [])
  const navigate = useNavigate()
  const onLogin = (role) => {
    setRole(role)
    setTimeout(() => { 
      navigate("/app") // to change
    }, 300)
  }

  const RouterPath = useCallback(() => {
    switch (role) {
      case 'admin':
        return <AdminRouter />
      case 'representative':
        return <UserRoute />
      default:
        return <AdminRouter />
    }
  }, [role])

  return (
    <Routes>
      <Route
      path='/login'
      element={<PrivateHomeRoute>
            <LoginPage />
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
    
  )
  
}