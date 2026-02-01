// services/auth.service.ts
import api from "@/app/config/axios";

export const registerApi = (data: {
  firstName: string;
  lastName: string;
  name?: string;
  email: string;
  password: string;
}) => {
  return api.post("/api/auth/register", data);
};
