import React from "react"
import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../utils/utils"

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to={'/login'} />
}

export default PrivateRoute

export const PrivateHomeRoute = ({ children }) => {
  return !isAuthenticated() ? children : <Navigate to={'/'} /> //to-change
}