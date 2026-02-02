// stores/register.store.ts
import { create } from "zustand";
import { registerApi } from "@/services/authService";
import axios from "axios";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterStore {
  formData: RegisterForm;
  acceptTerms: boolean;
  loading: boolean;
  error: string | null;

  setAcceptTerms: (value: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => Promise<{ success: boolean; message?: string }>;
  reset: () => void;
}

export const useRegisterStore = create<RegisterStore>((set, get) => ({
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },

  acceptTerms: false,
  loading: false,
  error: null,

  setAcceptTerms: (value) => set({ acceptTerms: value }),

  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    }));
  },

  submit: async () => {
    const { formData, acceptTerms } = get();

    // ===== validate =====
    if (!formData.name.trim()) {
      const message = "Vui lòng nhập họ và tên";
      set({ error: message });
      return { success: false, message };
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      const message = "Email không hợp lệ";
      set({ error: message });
      return { success: false, message };
    }

    if (formData.password.length < 8) {
      const message = "Mật khẩu phải ít nhất 8 ký tự";
      set({ error: message });
      return { success: false, message };
    }

    if (formData.password !== formData.confirmPassword) {
      const message = "Mật khẩu xác nhận không khớp";
      set({ error: message });
      return { success: false, message };
    }

    if (!acceptTerms) {
      const message = "Bạn phải chấp nhận điều khoản";
      set({ error: message });
      return { success: false, message };
    }

    // ===== submit =====
    try {
      set({ loading: true, error: null });

      await registerApi({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      set({ loading: false });
      return { success: true, message: "Đăng ký thành công!" };
    } catch (err: unknown) {
      let message = "Đăng ký thất bại";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      }

      set({
        error: message,
        loading: false,
      });
      return { success: false, message };
    }
  },

  reset: () =>
    set({
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      acceptTerms: false,
      error: null,
    }),
}));

// ==========================================
// STORE AUTH (Login, Token, User Info)
// ==========================================
interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;

  login: (userData: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,

  login: (user, accessToken, refreshToken) =>
    set({
      user,
      accessToken,
      refreshToken,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    }),
}));
