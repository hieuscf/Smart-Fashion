// src/lib/axios.ts
import axios from "axios";
import { notify } from "@/Utils/notify";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  notify.error("VITE_API_URL is not defined");
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

export default api;

