import React, { useState } from "react";
import { Crown, Sparkles, Send, Facebook, Instagram, Youtube } from "lucide-react";

const LuxuryFooterBrand = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="lg:col-span-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full"></div>
          <Crown
            className="w-10 h-10 text-amber-400 relative"
            strokeWidth={1.5}
          />
        </div>
        <div>
          <h2 className="text-2xl font-serif font-light text-white tracking-wider">
            ELÉGANCE
          </h2>
          <p className="text-[10px] text-amber-400/80 tracking-widest font-light">
            HAUTE COUTURE
          </p>
        </div>
      </div>

      <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
        Thương hiệu thời trang cao cấp dành cho phái đẹp. Mỗi thiết kế là một
        tác phẩm nghệ thuật, được chế tác với niềm đam mê và sự tinh xảo từ năm
        2024.
      </p>

      {/* Newsletter */}
      <div className="mb-6">
        <h3 className="text-white text-sm font-light mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Đăng Ký Nhận Tin</span>
        </h3>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email của bạn"
            className="w-full pl-4 pr-12 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition outline-none font-light placeholder-zinc-600 text-sm"
          />
          <button
            onClick={handleSubscribe}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-500 rounded-md flex items-center justify-center hover:from-amber-500 hover:to-amber-400 transition"
          >
            <Send className="w-4 h-4 text-black" strokeWidth={2} />
          </button>
        </div>
        {subscribed && (
          <p className="text-amber-400 text-xs font-light mt-2">
            ✓ Cảm ơn bạn đã đăng ký!
          </p>
        )}
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-white text-sm font-light mb-3">
          Theo dõi chúng tôi
        </h3>
        <div className="flex items-center gap-3">
          <a
            href="#facebook"
            className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-amber-400/10 hover:border-amber-400/50 transition group"
          >
            <Facebook
              className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition"
              strokeWidth={1.5}
            />
          </a>
          <a
            href="#instagram"
            className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-amber-400/10 hover:border-amber-400/50 transition group"
          >
            <Instagram
              className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition"
              strokeWidth={1.5}
            />
          </a>
          <a
            href="#youtube"
            className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-amber-400/10 hover:border-amber-400/50 transition group"
          >
            <Youtube
              className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LuxuryFooterBrand;
