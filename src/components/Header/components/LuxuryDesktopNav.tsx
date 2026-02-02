import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { collections, services } from "../headerData";

const LuxuryDesktopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {/* Collections Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveDropdown("collections")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center gap-1 text-zinc-300 hover:text-amber-400 transition font-light tracking-wide py-2">
          <span>Bộ Sưu Tập</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              activeDropdown === "collections" ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeDropdown === "collections" && (
          <div className="absolute top-full left-0 pt-2 w-64">
             <div className="bg-zinc-950/98 backdrop-blur-xl border border-amber-900/20 rounded-lg shadow-2xl overflow-hidden">
              <div className="p-2">
                {collections.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-zinc-900/50 transition group"
                  >
                    <span className="text-sm text-zinc-300 group-hover:text-amber-400 transition font-light">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 bg-amber-400/10 text-amber-400 rounded-full font-light tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Services Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveDropdown("services")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center gap-1 text-zinc-300 hover:text-amber-400 transition font-light tracking-wide py-2">
          <span>Dịch Vụ</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              activeDropdown === "services" ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeDropdown === "services" && (
          <div className="absolute top-full left-0 pt-2 w-56">
             <div className="bg-zinc-950/98 backdrop-blur-xl border border-amber-900/20 rounded-lg shadow-2xl overflow-hidden">
              <div className="p-2">
                {services.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg hover:bg-zinc-900/50 transition"
                  >
                    <span className="text-sm text-zinc-300 hover:text-amber-400 transition font-light">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Direct Links */}
      <a
        href="#about"
        className="text-zinc-300 hover:text-amber-400 transition font-light tracking-wide"
      >
        Về Chúng Tôi
      </a>
      <a
        href="#lookbook"
        className="text-zinc-300 hover:text-amber-400 transition font-light tracking-wide"
      >
        Lookbook
      </a>
      <a
        href="#contact"
        className="text-zinc-300 hover:text-amber-400 transition font-light tracking-wide"
      >
        Liên Hệ
      </a>
    </nav>
  );
};

export default LuxuryDesktopNav;
