import axios from "axios";

const devURL = "http://localhost:2024";
const prodURL = "";
const baseURL = import.meta.env.PROD ? prodURL : devURL;

const api = axios.create({
  baseURL,
});

export default api;
