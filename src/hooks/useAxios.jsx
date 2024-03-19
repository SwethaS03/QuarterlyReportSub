import axios from "axios";
// require('dotenv').config()

export default function useAxios() {
  const response = { isError: false };
  const baseURL = "http://localhost:3000";
  let token = localStorage.getItem("AUTH_TOKEN");
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${String(token)} ` : "",
    },
  });

  axiosInstance.interceptors.request.use(
    async (req) => {
      req.headers["ngrok-skip-browser-warning"] = "true";
      return req;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  async function request(method, endpoint = "", body = {}) {
    const url = `${baseURL}${endpoint}`;

    try {
      const reqBody = method !== "GET" && JSON.stringify(body);
      if (method === "GET") {
        const { data } = await axiosInstance.get(url, { params: body });
        response.data = data;
      } else if (method === "GET_FILE_WITH_AUTH") {
        const { data } = await axiosInstance.get(url, {
          params: body,
          responseType: "arraybuffer",
        });
        response.data = data;
      } else if (method === "GET_WITHOUT_AUTH") {
        const { data } = await axios.get(url, { params: body });
        response.data = data;
      } else if (method === "DELETE") {
        const { data } = await axiosInstance.delete(url);
        response.data = data;
      } else if (method === "POST") {
        const { data } = await axiosInstance.post(url, reqBody);
        response.data = data;
      } else if (method === "PUT_FILE_WITH_AUTH") {
        const { data } = await axiosInstance.put(url, body, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        response.data = data;
      } else if (method === "POST_WITHOUT_AUTH") {
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "",
          },
        };
        const { data } = await axios.post(url, reqBody, config);
        response.data = data;
      } else if (method === "PUT") {
        const { data } = await axiosInstance.put(url, reqBody);
        response.data = data;
      } else if (method === "PATCH") {
        const { data } = await axiosInstance.patch(url, reqBody);
        response.data = data;
      }
      return response;
    } catch (error) {
      if (error?.response?.status === 401) {
        return { isError: true, error: error?.response?.data };
      } else {
        return { isError: true, error: error?.response?.data };
      }
    }
  }

  async function getWithAuth(url, data) {
    return await request("GET", url, data);
  }

  async function getFileWithAuth(url, data) {
    return await request("GET_FILE_WITH_AUTH", url, data);
  }
  async function getWithoutAuth(url, data) {
    return await request("GET_WITHOUT_AUTH", url, data);
  }
  async function postWithAuth(url, data) {
    return await request("POST", url, data);
  }
  async function postWithoutAuth(url, data) {
    return await request("POST_WITHOUT_AUTH", url, data);
  }
  const putWithAuth = async (url, data) => {
    return await request("PUT", url, data);
  };
  const patchWithAuth = async (url, data) => {
    return await request("PATCH", url, data);
  };
  const deleteWithAuth = async (url) => {
    return await request("DELETE", url);
  };

  async function putFileWithAuth(url, data) {
    return await request("PUT_FILE_WITH_AUTH", url, data);
  }

  return {
    getWithAuth,
    getFileWithAuth,
    getWithoutAuth,
    postWithAuth,
    postWithoutAuth,
    putWithAuth,
    patchWithAuth,
    deleteWithAuth,
    putFileWithAuth,
  };
}
