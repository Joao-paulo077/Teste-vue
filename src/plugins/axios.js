import axios from "axios";

const api = axios.create({
  baseURL: "https://api.stay.tui.com",
});

export default api;
