import axios from "axios";

const api = axios.create({
  baseURL: "https://food-recipe-app-backend-aaka.onrender.com/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      window.location.href = "/login";
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Response error:", {
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
