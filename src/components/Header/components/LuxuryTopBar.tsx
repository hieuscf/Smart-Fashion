import { Phone, Mail, Sparkles } from "lucide-react";

const LuxuryTopBar = () => {
  return (
    <div className="bg-zinc-950 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-xs">
          {/* Left - Contact Info */}
          <div className="hidden md:flex items-center gap-6 text-zinc-400">
            <a
              href="tel:+84123456789"
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Phone className="w-3 h-3" />
              <span className="font-light">+84 123 456 789</span>
            </a>
            <a
              href="mailto:contact@elegance.com"
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Mail className="w-3 h-3" />
              <span className="font-light">contact@elegance.com</span>
            </a>
          </div>

          {/* Center - Promo */}
          <div className="flex-1 md:flex-none text-center">
            <p className="text-amber-400 font-light flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span className="tracking-wide">
                Livraison gratuite dès 10M VND
              </span>
            </p>
          </div>

          {/* Right - Language & Support */}
          <div className="hidden md:flex items-center gap-4 text-zinc-400">
            <button className="hover:text-amber-400 transition font-light">
              VN
            </button>
            <span className="text-zinc-700">|</span>
            <button className="hover:text-amber-400 transition font-light">
              EN
            </button>
            <span className="text-zinc-700">|</span>
            <button className="hover:text-amber-400 transition font-light">
              FR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryTopBar;
