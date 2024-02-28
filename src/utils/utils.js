import jwt_decode, { JwtPayload } from "jwt-decode"
export function isAuthenticated() {
  try {
    const authToken = localStorage.getItem('AUTH_TOKEN')
    if (authToken) {
      const jwtInfo = jwt_decode(authToken)
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