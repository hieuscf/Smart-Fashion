import { Menu, X, ShoppingBag } from "lucide-react";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function LogoSection({ isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="bg-linear-to-br from-orange-500 to-orange-600 p-2 rounded-xl shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all">
          <ShoppingBag className="w-8 h-8 text-white" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-2xl font-bold text-gray-800">
            Shop<span className="text-orange-500">Hub</span>
          </h1>
          <p className="text-xs text-gray-500">Mua sắm thông minh</p>
        </div>
      </div>
    </div>
  );
}
