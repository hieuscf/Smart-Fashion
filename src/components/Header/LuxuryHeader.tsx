import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import LuxuryTopBar from "./components/LuxuryTopBar";
import LuxuryLogo from "./components/LuxuryLogo";
import LuxuryDesktopNav from "./components/LuxuryDesktopNav";
import LuxuryMobileMenu from "./components/LuxuryMobileMenu";
import LuxuryActions from "./components/LuxuryActions";

const LuxuryHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <LuxuryTopBar />

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50"
            : "bg-black"
        }`}
      >
        <div className="border-b border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-amber-400 transition p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </button>

              {/* Logo */}
              <LuxuryLogo />

              {/* Desktop Navigation */}
              <LuxuryDesktopNav />

              {/* Right Actions */}
              <LuxuryActions
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
                cartCount={cartCount}
                wishlistCount={wishlistCount}
              />
            </div>
          </div>
        </div>

        {/* Search Bar - Keeping it here as it overlays or expands in the header context usually, 
            or we could move it to Actions if it was just an icon. 
            But looking at original code, it renders a full bar below the header or overlays.
            Original code: lines 280-297
        */}
        {searchOpen && (
          <div className="border-t border-zinc-800/50 bg-zinc-950/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="relative">
                {/* We need Search icon here too, let's import it or pass as children, 
                    but importing direct is fine for this small part */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400/50"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition outline-none font-light placeholder-zinc-600"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <LuxuryMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        wishlistCount={wishlistCount}
      />
    </>
  );
};

export default LuxuryHeader;

