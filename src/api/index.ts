import axios from "axios";

const devURL = "http://localhost:2024";
const prodURL = "https://mailer-api-8dnv.onrender.com";
const baseURL = import.meta.env.PROD ? prodURL : devURL;

const api = axios.create({
  baseURL,
});

export default api;
