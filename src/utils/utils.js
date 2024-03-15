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


export function formatDateString(startDate, endDate) {
  if (typeof startDate === 'string') {
    startDate = new Date(startDate);
  }
  if (typeof endDate === 'string') {
    endDate = new Date(endDate);
  }
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const startDay = startDate.getUTCDate().toString().padStart(2, '0');
  const startMonth = months[startDate.getUTCMonth()];


  const endDay = endDate.getUTCDate().toString().padStart(2, '0');
  const endMonth = months[endDate.getUTCMonth()];


  const formattedString = `${startMonth} - ${endMonth}`;

  return formattedString;
}


