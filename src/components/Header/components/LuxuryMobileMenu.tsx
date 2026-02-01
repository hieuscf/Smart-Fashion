import { User, Heart, Phone, Mail } from "lucide-react";
import LuxuryLogo from "./LuxuryLogo";
import { collections, services } from "../headerData";

interface LuxuryMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistCount: number;
}

const LuxuryMobileMenu: React.FC<LuxuryMobileMenuProps> = ({
  isOpen,
  onClose,
  wishlistCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Menu Panel */}
      <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-zinc-950 border-r border-amber-900/20 overflow-y-auto">
        <div className="p-6">
          {/* Mobile Logo */}
          <LuxuryLogo isMobile={true} />

          {/* Mobile Navigation */}
          <nav className="space-y-1">
            {/* Collections */}
            <div className="space-y-1">
              <p className="text-xs text-zinc-500 font-light tracking-widest uppercase px-4 py-2">
                Collections
              </p>
              {collections.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-zinc-900/50 transition"
                >
                  <span className="text-sm text-zinc-300 font-light">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 bg-amber-400/10 text-amber-400 rounded-full font-light">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Services */}
            <div className="space-y-1 pt-4">
              <p className="text-xs text-zinc-500 font-light tracking-widest uppercase px-4 py-2">
                Services
              </p>
              {services.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg hover:bg-zinc-900/50 transition"
                >
                  <span className="text-sm text-zinc-300 font-light">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Direct Links */}
            <div className="space-y-1 pt-4">
              <a
                href="#about"
                className="block px-4 py-3 rounded-lg hover:bg-zinc-900/50 transition"
              >
                <span className="text-sm text-zinc-300 font-light">
                  Notre Histoire
                </span>
              </a>
              <a
                href="#lookbook"
                className="block px-4 py-3 rounded-lg hover:bg-zinc-900/50 transition"
              >
                <span className="text-sm text-zinc-300 font-light">
                  Lookbook
                </span>
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 rounded-lg hover:bg-zinc-900/50 transition"
              >
                <span className="text-sm text-zinc-300 font-light">
                  Contact
                </span>
              </a>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-900 transition">
              <span className="text-sm text-zinc-300 font-light">
                Mon Compte
              </span>
              <User className="w-4 h-4 text-amber-400" strokeWidth={1.5} />
            </button>

            <button className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-900 transition">
              <span className="text-sm text-zinc-300 font-light">
                Liste de Souhaits
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-amber-400">{wishlistCount}</span>
                <Heart className="w-4 h-4 text-amber-400" strokeWidth={1.5} />
              </div>
            </button>
          </div>

          {/* Mobile Contact */}
          <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3">
            <a
              href="tel:+84123456789"
              className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-light">+84 123 456 789</span>
            </a>
            <a
              href="mailto:contact@elegance.com"
              className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-light">contact@elegance.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryMobileMenu;
