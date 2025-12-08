import {
  Bell,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Package,
  LogOut,
  Settings,
  Star,
} from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface HeaderActionsProps {
  cartCount: number;
  wishlistCount: number;
  notificationCount: number;
  isUserMenuOpen: boolean;
  isLoggedIn: boolean;
  setIsUserMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderActions({
  cartCount,
  wishlistCount,
  notificationCount,
  isLoggedIn,
  isUserMenuOpen,
  setIsUserMenuOpen,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Notifications */}
      <button className="relative p-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all">
        <Bell className="w-6 h-6" />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
            {notificationCount}
          </span>
        )}
      </button>

      {/* Wishlist */}
      <button className="relative p-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all">
        <Heart className="w-6 h-6" />
        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {wishlistCount}
          </span>
        )}
      </button>

      {/* Cart */}
      <button className="relative p-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all group">
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
            {cartCount}
          </span>
        )}
      </button>

      {/* User Menu */}
      <div className="relative">
        {isLoggedIn ? (
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center gap-2 pl-3 pr-2 py-2 bg-orange-50 hover:bg-orange-100 rounded-full transition-all group"
          >
            <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
              N
            </div>
            <span className="hidden lg:inline text-gray-700 font-medium">
              Nguyễn A
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                isUserMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all font-medium">
            <User className="w-5 h-5" />
            <span>Đăng nhập</span>
          </button>
        )}

        {/* Dropdown */}
        {isUserMenuOpen && isLoggedIn && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="font-semibold text-gray-800">Nguyễn Văn A</p>
              <p className="text-sm text-gray-500">user@email.com</p>
            </div>

            <div className="py-2">
              <button className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-orange-50 transition-colors group">
                <User className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                <span className="text-gray-700">Tài khoản của tôi</span>
              </button>
              <button className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-orange-50 transition-colors group">
                <Package className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                <span className="text-gray-700">Đơn hàng của tôi</span>
              </button>
              <button className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-orange-50 transition-colors group">
                <Heart className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                <span className="text-gray-700">Danh sách yêu thích</span>
              </button>
              <button className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-orange-50 transition-colors group">
                <Star className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                <span className="text-gray-700">Kênh người bán</span>
              </button>
              <button className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-orange-50 transition-colors group">
                <Settings className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                <span className="text-gray-700">Cài đặt</span>
              </button>
            </div>

            <div className="border-t border-gray-100 pt-2">
              <button className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-red-50 transition-colors group">
                <LogOut className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
                <span className="text-gray-700 group-hover:text-red-500">
                  Đăng xuất
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
