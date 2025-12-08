// src/utils/notify.ts
import { toast,type ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const notify = {
  success: (msg: string, options: ToastOptions = {}) =>
    toast.success(msg, { ...defaultOptions, ...options }),

  error: (msg: string, options: ToastOptions = {}) =>
    toast.error(msg, { ...defaultOptions, ...options }),

  info: (msg: string, options: ToastOptions = {}) =>
    toast.info(msg, { ...defaultOptions, ...options }),

  warn: (msg: string, options: ToastOptions = {}) =>
    toast.warn(msg, { ...defaultOptions, ...options }),
};
