// services/auth.service.ts
import api from "@/app/config/axios";

export const registerApi = (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post("/api/auth/register", data);
};

export const loginApi = (data: { email: string; password: string }) => {
  return api.post("/api/auth/login", data);
};

export const refreshApi = () => {
  return api.post("/api/auth/refresh", {}, { withCredentials: true });
};