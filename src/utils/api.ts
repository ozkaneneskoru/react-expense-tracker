import axios from "axios";

axios.defaults.baseURL='https://expensetracker-be.herokuapp.com';
axios.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem("token");
        if (token) {
            if (token) config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
);
export default axios.create({});