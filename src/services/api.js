import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8889",
});

export default api;
