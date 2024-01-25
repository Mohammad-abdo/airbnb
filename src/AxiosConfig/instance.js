import axios from "axios";
import Cookies from "js-cookie";
const instance = axios.create({ baseURL: "https://airbnb-app.cyclic.app/" });

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
