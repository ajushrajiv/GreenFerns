import axios from "axios";

const config = axios.create({
  baseURL: "http://localhost:4080/v1",
});

export default config;