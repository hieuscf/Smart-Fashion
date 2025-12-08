import type { FC } from "react";

interface AuthToggleProps {
  isLogin: boolean;
  toggle: () => void;
}

const AuthToggle: FC<AuthToggleProps> = ({ isLogin, toggle }) => {
  return (
    <div className="flex justify-center gap-2 mb-6">
      <button
        onClick={toggle}
        className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
          isLogin
            ? "bg-linear-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/40"
            : "bg-white/10 text-orange-300 hover:bg-white/20"
        }`}
      >
        Đăng nhập
      </button>

      <button
        onClick={toggle}
        className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
          !isLogin
            ? "bg-linear-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/40"
            : "bg-white/10 text-orange-300 hover:bg-white/20"
        }`}
      >
        Đăng ký
      </button>
    </div>
  );
};

export default AuthToggle;
