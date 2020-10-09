import axios from "axios";
import { appConfig } from "./config";

export const http = axios.create({
  baseURL: appConfig.baseURL,
  headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use(
  function (config) {
    let user = JSON.parse(localStorage.getItem("msuser"));

    if (user && user.token) {
      config.headers["x-jwt-assertion"] = user.token;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
