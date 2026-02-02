import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  LogOut,
  FileText,
  History,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate, Link } from "react-router-dom";

interface LuxuryActionsProps {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  cartCount: number;
  wishlistCount: number;
}

const LuxuryActions = ({
  searchOpen,
  setSearchOpen,
  cartCount,
  wishlistCount,
}: LuxuryActionsProps) => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const handleAccountBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (!event.currentTarget.contains(nextTarget)) {
      setIsAccountOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4">
      {/* Search */}
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="text-zinc-300 hover:text-amber-400 transition p-2"
      >
        <Search className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Wishlist */}
      <button className="relative text-zinc-300 hover:text-amber-400 transition p-2 hidden sm:block">
        <Heart className="w-5 h-5" strokeWidth={1.5} />
        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 text-black text-xs font-light rounded-full flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </button>

      {/* Cart */}
      <button className="relative text-zinc-300 hover:text-amber-400 transition p-2">
        <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 text-black text-xs font-light rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* Account */}
      {/* Account */}
      <div
        className="relative hidden sm:block"
        onMouseEnter={() => setIsAccountOpen(true)}
        onMouseLeave={() => setIsAccountOpen(false)}
        onFocusCapture={() => setIsAccountOpen(true)}
        onBlurCapture={handleAccountBlur}
      >
        <button className="text-zinc-300 hover:text-amber-400 transition p-2 flex items-center">
          <User className="w-5 h-5" strokeWidth={1.5} />
        </button>
        
        {/* Dropdown */}
        <div
          className={`absolute right-0 top-full pt-2 w-56 transition-all duration-300 z-50 ${
            isAccountOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
           <div className="bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
              <div className="p-2 space-y-1">
                {isAuthenticated ? (
                  <>
                    <Link 
                      to="/profile" 
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-light text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group/item"
                    >
                      <FileText className="w-4 h-4 text-amber-400/70 group-hover/item:text-amber-400 transition-colors" strokeWidth={1.5} />
                      Thông tin cá nhân
                    </Link>
                    
                    <Link 
                      to="/orders" 
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-light text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group/item"
                    >
                      <History className="w-4 h-4 text-amber-400/70 group-hover/item:text-amber-400 transition-colors" strokeWidth={1.5} />
                       Lịch sử đặt hàng
                    </Link>

                    <div className="h-px bg-zinc-800 my-1 mx-2"></div>

                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-light text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors group/item"
                    >
                      <LogOut className="w-4 h-4 group-hover/item:text-rose-300 transition-colors" strokeWidth={1.5} />
                       Đăng xuất
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-light text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group/item"
                    >
                      <LogIn className="w-4 h-4 text-amber-400/70 group-hover/item:text-amber-400 transition-colors" strokeWidth={1.5} />
                      Đăng nhập
                    </Link>
                    <Link 
                      to="/register" 
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-light text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group/item"
                    >
                      <UserPlus className="w-4 h-4 text-amber-400/70 group-hover/item:text-amber-400 transition-colors" strokeWidth={1.5} />
                      Tạo tài khoản
                    </Link>
                  </>
                )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryActions;
