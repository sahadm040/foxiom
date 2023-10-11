import axios from "axios";
const API_URL_DEV = "https://jsonplaceholder.typicode.com/";
export const axiosApi = axios.create({
  baseURL: API_URL_DEV,
});

