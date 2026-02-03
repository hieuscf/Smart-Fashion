import api from "@/app/config/axios";

export type ProfileUpdatePayload = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export const getProfileApi = (accessToken: string) => {
  return api.get("/api/profile/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const updateProfileApi = (
  accessToken: string,
  payload: ProfileUpdatePayload
) => {
  return api.patch("/api/profile/me", payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
