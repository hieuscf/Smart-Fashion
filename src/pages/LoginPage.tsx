import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Crown,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { notify } from "../Utils/notify";
import { useNavigate } from "react-router-dom";

const LuxuryLoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Vui lòng điền đầy đủ thông tin");
      notify.error("Vui lòng điền đầy đủ thông tin");
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email không hợp lệ");
      notify.error("Email không hợp lệ");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      console.log("Login:", { email, password, rememberMe });
      setIsLoading(false);
      notify.success("Chào mừng quý khách đến với bộ sưu tập cao cấp!");
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="h-screen bg-black relative overflow-hidden flex items-center justify-center px-4">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Animated Golden Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-1 bg-amber-400 rounded-full animate-ping"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-amber-300 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-1 h-1 bg-amber-500 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-1 h-1 bg-amber-400 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-900/20 via-transparent to-transparent rounded-full blur-3xl"></div>

      {/* Main Login Container */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-0 bg-zinc-950/90 backdrop-blur-xl rounded-none md:rounded-2xl shadow-2xl overflow-hidden border border-amber-900/20 max-h-[90vh]">
          {/* Left Side - Branding */}
          <div className="hidden md:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-amber-950/50 via-zinc-900/50 to-rose-950/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="mb-6 relative inline-block">
                <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full"></div>
                <Crown
                  className="w-20 h-20 text-amber-400 relative animate-pulse"
                  strokeWidth={1.5}
                />
              </div>

              <h1 className="text-5xl font-serif font-light text-white mb-4 tracking-wider">
                THANH LỊCH
              </h1>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>

              <p className="text-amber-100/80 font-light text-lg mb-2 tracking-wide">
                Bộ sưu tập thời trang cao cấp
              </p>

              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xs mx-auto">
                Nơi tinh hoa thời trang hội tụ. Mỗi thiết kế là một tác phẩm
                nghệ thuật độc bản.
              </p>

              {/* Decorative Divider */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400/60" />
                <span className="text-amber-400/60 text-xs tracking-widest font-light">
                  EST. 2024
                </span>
                <Sparkles className="w-4 h-4 text-amber-400/60" />
              </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-6 md:p-8 bg-zinc-950/95 flex flex-col justify-center">
            {/* Mobile Header */}
            <div className="md:hidden text-center mb-8">
              <Crown
                className="w-12 h-12 text-amber-400 mx-auto mb-3"
                strokeWidth={1.5}
              />
              <h1 className="text-3xl font-serif font-light text-white tracking-wider">
                THANH LỊCH
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif font-light text-white mb-2 tracking-wide">
                Chào mừng
              </h2>
              <p className="text-zinc-400 text-sm font-light">
                Đăng nhập để khám phá bộ sưu tập độc quyền
              </p>
            </div>

            <div className="space-y-4">
              {/* Error Message */}
              {error && (
                <div className="bg-rose-950/30 border border-rose-900/50 text-rose-200 px-4 py-3 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">{error}</span>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-light text-zinc-300 tracking-wide"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail
                      className="h-5 w-5 text-amber-400/50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3.5 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition duration-300 outline-none font-light placeholder-zinc-600"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-light text-zinc-300 tracking-wide"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock
                      className="h-5 w-5 text-amber-400/50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-12 py-3.5 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition duration-300 outline-none font-light placeholder-zinc-600"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-amber-400/50 hover:text-amber-400 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" strokeWidth={1.5} />
                    ) : (
                      <Eye className="h-5 w-5" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 bg-zinc-900 border-zinc-700 rounded text-amber-400 focus:ring-amber-400/50 focus:ring-offset-0 cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-zinc-400 cursor-pointer font-light"
                  >
                    Lưu đăng nhập
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => notify.info("Chức năng quên mật khẩu đang được phát triển")}
                  className="text-sm font-light text-amber-400 hover:text-amber-300 transition tracking-wide"
                >
                  Quên mật khẩu?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-3.5 rounded-lg font-light tracking-widest text-sm hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 focus:ring-offset-zinc-950 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-900/20 hover:shadow-amber-900/40 transform hover:-translate-y-0.5 uppercase"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Đang đăng nhập...</span>
                  </div>
                ) : (
                  "Đăng nhập"
                )}
              </button>

              {/* Divider */}
              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-zinc-950 text-zinc-500 font-light tracking-widest">
                    OU
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => notify.info("Đăng nhập bằng Google đang được phát triển")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 transition duration-300 font-light text-zinc-300 text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="tracking-wide">Đăng nhập với Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => notify.info("Đăng nhập bằng Facebook đang được phát triển")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 transition duration-300 font-light text-zinc-300 text-sm"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="tracking-wide">Đăng nhập với Facebook</span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center border-t border-zinc-800 pt-8">
              <p className="text-sm text-zinc-400 font-light">
                Thành viên mới?{" "}
                <button
                  onClick={() => navigate("/register")}
                  className="font-normal text-amber-400 hover:text-amber-300 transition tracking-wide"
                >
                  Tạo một tài khoản
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center hidden md:block">
        <p className="text-xs text-zinc-600 font-light tracking-wide">
          © 2024 Sự thanh lịch của thời trang cao cấp. Mọi quyền được bảo lưu.
        </p>
      </div>
    </div>
  );
};

export default LuxuryLoginPage;
