import axios from "axios";
import getToken from "../utils/GetToken";

const baseURL = "http://localhost:3002/api/";

const authInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
protectedInstance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return console.log(error);
  }
);
export default { authInstance, protectedInstance };
