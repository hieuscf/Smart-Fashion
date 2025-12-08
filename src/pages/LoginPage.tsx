import { useState } from "react";
import AuthInput from "../features/Auth/AuthInput";
import AuthPasswordInput from "../features/Auth/AuthPasswordInput";
import AuthToggle from "../features/Auth/AuthToggle";
import SocialLogin from "../features/Auth/SocialLogin";
import BrandLogo from "../components/BrandLogo";
import { Mail } from "lucide-react";
import { useAuthForm } from "../hooks/useAuthForm";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const { formData, errors, isLoading, inputChange, submit, resetForm } =
    useAuthForm(isLogin);

  const toggle = () => {
    setIsLogin((v) => !v);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-orange-900 to-slate-900 p-6">
      <BrandLogo
        title="ShopHub Pro"
        subtitle="Nền tảng thương mại điện tử thông minh"
      />

      <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-xl">
        <AuthToggle isLogin={isLogin} toggle={toggle} />

        <form onSubmit={submit}>
          <AuthInput
            label="Email"
            name="email"
            value={formData.email}
            onChange={inputChange}
            error={errors.email}
            placeholder="abc@gmail.com"
            icon={Mail}
          />

          <AuthPasswordInput
            label="Mật khẩu"
            name="password"
            value={formData.password}
            onChange={inputChange}
            error={errors.password}
          />

          {!isLogin && (
            <AuthPasswordInput
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={inputChange}
              error={errors.confirmPassword}
            />
          )}

          <button
            disabled={isLoading}
            className="mt-6 w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-purple-600 to-pink-600"
          >
            {isLoading ? "Đang xử lý..." : isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <div className="my-6 border-t border-white/10" />

        <SocialLogin />
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>
          Bằng việc đăng nhập, bạn đồng ý với{" "}
          <span className="text-orange-500 hover:text-orange-600 cursor-pointer font-medium">
            Điều khoản sử dụng
          </span>{" "}
          và{" "}
          <span className="text-orange-500 hover:text-orange-600 cursor-pointer font-medium">
            Chính sách bảo mật
          </span>
        </p>
      </div>
    </div>
  );
}
