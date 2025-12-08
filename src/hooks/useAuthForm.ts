import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ErrorState {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const useAuthForm = (isLogin: boolean) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ErrorState>({});
  const [isLoading, setIsLoading] = useState(false);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const e: ErrorState = {};

    if (!formData.email) e.email = "Email là bắt buộc";
    if (!formData.password) e.password = "Mật khẩu là bắt buộc";

    if (!isLogin) {
      if (!formData.name) e.name = "Tên là bắt buộc";
      if (formData.password !== formData.confirmPassword)
        e.confirmPassword = "Mật khẩu không khớp";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      alert(isLogin ? "Đăng nhập thành công" : "Đăng ký thành công");
      setIsLoading(false);
    }, 1000);
  };

  const resetForm = () =>
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  return {
    formData,
    errors,
    isLoading,
    inputChange,
    submit,
    resetForm,
  };
};
 