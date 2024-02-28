import { jwtDecode } from "jwt-decode";

export function isAuthenticated() {
  try {
    const authToken = localStorage.getItem('AUTH_TOKEN')
    if (authToken) {
      const jwtInfo = jwtDecode(authToken)
      if (jwtInfo.exp && Date.now() >= jwtInfo.exp * 1000) {
        return false
      }
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

export function logout() {
  localStorage.removeItem('AUTH_TOKEN')
  localStorage.removeItem('USER')
}