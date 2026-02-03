import { create } from "zustand";
import axios from "axios";
import { notify } from "@/Utils/notify";
import { useAuthStore } from "@/stores/useAuthStore";
import {
  getProfileApi,
  updateProfileApi,
  type ProfileUpdatePayload,
} from "@/services/profileService";

export type ProfileUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  phone: string | null;
  address: string | null;
  isActive: boolean;
  isEmailVerified: boolean;
  lastLoginAt: string | null;
  createdAt: string;
  updatedAt: string;
};

type ProfileState = {
  profile: ProfileUser | null;
  loading: boolean;
  updating: boolean;
  error: string | null;
  fetchProfile: () => Promise<{ success: boolean; message?: string }>;
  updateProfile: (
    payload: ProfileUpdatePayload
  ) => Promise<{ success: boolean; message?: string }>;
};

const getAccessToken = () => useAuthStore.getState().accessToken;

const extractUser = (data: unknown): ProfileUser | null => {
  if (!data || typeof data !== "object") {
    return null;
  }

  const payload = data as Record<string, unknown>;
  const user =
    (payload.data as Record<string, unknown>)?.user ??
    (payload as Record<string, unknown>).user;

  if (!user || typeof user !== "object") {
    return null;
  }

  return user as ProfileUser;
};

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  loading: false,
  updating: false,
  error: null,

  fetchProfile: async () => {
    try {
      const accessToken = getAccessToken();
      if (!accessToken) {
        const message = "Bạn chưa đăng nhập.";
        set({ error: message, loading: false });
        return { success: false, message };
      }

      set({ loading: true, error: null });
      const response = await getProfileApi(accessToken);
      const user = extractUser(response.data);

      if (!user) {
        const message = "Không lấy được thông tin người dùng.";
        set({ error: message, loading: false });
        return { success: false, message };
      }

      set({ profile: user, loading: false });
      return { success: true };
    } catch (err: unknown) {
      let message = "Không thể tải thông tin người dùng.";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      } else if (err instanceof Error && err.message) {
        message = err.message;
      }

      set({ error: message, loading: false });
      return { success: false, message };
    }
  },

  updateProfile: async (payload) => {
    try {
      const accessToken = getAccessToken();
      if (!accessToken) {
        const message = "Bạn chưa đăng nhập.";
        set({ error: message, updating: false });
        return { success: false, message };
      }

      set({ updating: true, error: null });
      const response = await updateProfileApi(accessToken, payload);
      const user = extractUser(response.data);

      if (!user) {
        const message = "Không thể cập nhật thông tin người dùng.";
        set({ error: message, updating: false });
        return { success: false, message };
      }

      set({ profile: user, updating: false });
      notify.success("Cập nhật hồ sơ thành công.");
      return { success: true };
    } catch (err: unknown) {
      let message = "Cập nhật hồ sơ thất bại.";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      } else if (err instanceof Error && err.message) {
        message = err.message;
      }

      notify.error(message);
      set({ error: message, updating: false });
      return { success: false, message };
    }
  },
}));
