import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Crown,
  AlertCircle,
  Sparkles,
  User,
  Check,
} from "lucide-react";
import { useRegisterStore } from "@/stores/useAuthStore";
import { notify } from "@/Utils/notify";

const LuxuryRegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);

  const {
    formData,
    acceptTerms,
    loading,
    error,
    handleChange,
    setAcceptTerms,
    submit,
  } = useRegisterStore();

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const getPasswordStrengthText = () => {
    const texts = ["Très faible", "Faible", "Moyen", "Fort", "Très fort"];
    const colors = [
      "text-red-400",
      "text-orange-400",
      "text-yellow-400",
      "text-green-400",
      "text-emerald-400",
    ];
    return { text: texts[passwordStrength], color: colors[passwordStrength] };
  };

  const handleSubmit = async () => {
    const result = await submit();
    if (result.success) {
      notify.success(result.message || "Đăng ký thành công!");
      navigate("/login");
    } else if (result.message) {
      notify.error(result.message);
    }
  };

  return (
    <div className="h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 py-12">
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

      {/* Main Register Container */}
      <div className="relative w-full max-w-6xl h-[90vh]">
        <div className="grid md:grid-cols-5 h-full bg-zinc-950/90 backdrop-blur-xl rounded-2xl overflow-hidden">
          {/* Left Side - Branding (2 columns) */}
          <div className="hidden md:flex md:col-span-2 flex-col justify-between p-12 bg-gradient-to-br from-amber-950/50 via-zinc-900/50 to-rose-950/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="mb-6 relative inline-block">
                <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full"></div>
                <Crown
                  className="w-16 h-16 text-amber-400 relative animate-pulse"
                  strokeWidth={1.5}
                />
              </div>

              <h1 className="text-4xl font-serif font-light text-white mb-4 tracking-wider">
                THANH LỊCH
              </h1>

              <div className="w-20 h-px bg-gradient-to-r from-amber-400 via-amber-400 to-transparent mb-6"></div>

              <p className="text-amber-100/80 font-light text-base mb-4 tracking-wide">
                Tham gia nhà của chúng tôi
              </p>

              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
                Khám phá sự xuất sắc của thời trang cao cấp. Mỗi sáng tạo là duy
                nhất, mỗi chi tiết đều có giá trị.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-400" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-light">
                      Quyền truy cập độc quyền vào các bộ sưu tập
                    </p>
                    <p className="text-zinc-500 text-xs">Lời khuyên cá nhân</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-400" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-light">
                      Lời khuyên cá nhân từ các nhà thiết kế hàng đầu
                    </p>
                    <p className="text-zinc-500 text-xs">
                      Nhà tạo mẫu của chúng tôi theo ý của bạn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-400" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-light">
                      Bảo hành cao cấp
                    </p>
                    <p className="text-zinc-500 text-xs">
                      Mọi vấn đề đều được xử lý
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-400" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-light">
                      Chương trình khách hàng thân thiết
                    </p>
                    <p className="text-zinc-500 text-xs">
                      Phần thưởng độc quyền cho các thành viên
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Decoration */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-amber-400/60 text-xs tracking-widest font-light">
                <Sparkles className="w-3 h-3" />
                <span>THÀNH VIÊN TỪ 2024</span>
                <Sparkles className="w-3 h-3" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
          </div>

          {/* Right Side - Register Form (3 columns) */}
          <div
            className="md:col-span-3
            h-full
            p-8 md:p-10
            bg-zinc-950/95
            overflow-y-auto
            scrollbar-luxury"
          >
            {/* Mobile Header */}
            <div className="md:hidden text-center mb-6">
              <Crown
                className="w-10 h-10 text-amber-400 mx-auto mb-2"
                strokeWidth={1.5}
              />
              <h1 className="text-2xl font-serif font-light text-white tracking-wider">
                ELÉGANCE
              </h1>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-serif font-light text-white mb-2 tracking-wide">
                Tạo Tài Khoản
              </h2>
              <p className="text-zinc-400 text-sm font-light">
                Bắt đầu hành trình của bạn vào thế giới thời trang cao cấp
              </p>
            </div>

            <div className="space-y-5">
              {/* Error Message */}
              {error && (
                <div className="bg-rose-950/30 border border-rose-900/50 text-rose-200 px-4 py-3 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">{error}</span>
                </div>
              )}

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-light text-zinc-300 tracking-wide"
                  >
                    Họ
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User
                        className="h-5 w-5 text-amber-400/50"
                        strokeWidth={1.5}
                      />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition duration-300 outline-none font-light placeholder-zinc-600"
                      placeholder="Marie"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-light text-zinc-300 tracking-wide"
                  >
                    Tên
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User
                        className="h-5 w-5 text-amber-400/50"
                        strokeWidth={1.5}
                      />
                    </div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition duration-300 outline-none font-light placeholder-zinc-600"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-light text-zinc-300 tracking-wide"
                >
                  Email *
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
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition duration-300 outline-none font-light placeholder-zinc-600"
                    placeholder="marie@exemple.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-light text-zinc-300 tracking-wide"
                >
                  Mật Khẩu *
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-12 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition duration-300 outline-none font-light placeholder-zinc-600"
                    placeholder="Minimum 8 caractères"
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
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                            level <= passwordStrength
                              ? "bg-amber-400"
                              : "bg-zinc-800"
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p
                      className={`text-xs font-light ${
                        getPasswordStrengthText().color
                      }`}
                    >
                      {getPasswordStrengthText().text}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-light text-zinc-300 tracking-wide"
                >
                  Xác nhận mật khẩu
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock
                      className="h-5 w-5 text-amber-400/50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-12 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition duration-300 outline-none font-light placeholder-zinc-600"
                    placeholder="Retapez votre mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-amber-400/50 hover:text-amber-400 transition"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" strokeWidth={1.5} />
                    ) : (
                      <Eye className="h-5 w-5" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms & Newsletter */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="h-4 w-4 mt-0.5 bg-zinc-900 border-zinc-700 rounded text-amber-400 focus:ring-amber-400/50 focus:ring-offset-0 cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-zinc-400 cursor-pointer font-light"
                  >
                    Tôi chấp nhận các{" "}
                    <button className="text-amber-400 hover:text-amber-300 transition">
                      điều khoản sử dụng
                    </button>{" "}
                    và{" "}
                    <button className="text-amber-400 hover:text-amber-300 transition">
                      chính sách bảo mật
                    </button>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="newsletter"
                    type="checkbox"
                    checked={acceptNewsletter}
                    onChange={(e) => setAcceptNewsletter(e.target.checked)}
                    className="h-4 w-4 mt-0.5 bg-zinc-900 border-zinc-700 rounded text-amber-400 focus:ring-amber-400/50 focus:ring-offset-0 cursor-pointer"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 block text-sm text-zinc-400 cursor-pointer font-light"
                  >
                    Tôi muốn nhận sản phẩm mới và ưu đãi độc quyền
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-3.5 rounded-lg font-light tracking-widest text-sm hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 focus:ring-offset-zinc-950 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-900/20 hover:shadow-amber-900/40 transform hover:-translate-y-0.5 uppercase mt-2"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Đang tạo...</span>
                  </div>
                ) : (
                  "Tạo Tài Khoản"
                )}
              </button>

              {/* Login Link */}
              <div className="text-center border-t border-zinc-800 pt-6 mt-6">
                <p className="text-sm text-zinc-400 font-light">
                  Đã có tài khoản?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="font-normal text-amber-400 hover:text-amber-300 transition tracking-wide"
                  >
                    Đăng nhập
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-zinc-600 font-light tracking-wide">
          © 2024 Elégance Couture. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default LuxuryRegisterPage;
