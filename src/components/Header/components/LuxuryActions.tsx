import { Search, Heart, ShoppingBag, User } from "lucide-react";

interface LuxuryActionsProps {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  cartCount: number;
  wishlistCount: number;
}

const LuxuryActions: React.FC<LuxuryActionsProps> = ({
  searchOpen,
  setSearchOpen,
  cartCount,
  wishlistCount,
}) => {
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
      <button className="text-zinc-300 hover:text-amber-400 transition p-2 hidden sm:block">
        <User className="w-5 h-5" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default LuxuryActions;
