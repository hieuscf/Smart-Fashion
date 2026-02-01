import { Heart } from "lucide-react";
import { legal, paymentMethods } from "../footerData";

const LuxuryFooterBottom = () => {
  return (
    <div className="border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-zinc-500 text-xs font-light">
              © 2024 Elégance Couture. Bảo lưu mọi quyền.
            </p>
            <p className="text-zinc-600 text-xs font-light mt-1">
              Thiết kế bởi{" "}
              <Heart
                className="w-3 h-3 inline text-amber-400"
                strokeWidth={1.5}
              />{" "}
              tại TP.HCM
            </p>
          </div>

          {/* Legal Links - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {legal.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-zinc-500 hover:text-amber-400 transition font-light text-xs"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div>
            <p className="text-zinc-600 text-xs font-light mb-2 text-center lg:text-right">
              Phương thức thanh toán
            </p>
            <div className="flex items-center gap-2 justify-center lg:justify-end">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="w-10 h-7 bg-zinc-900/50 border border-zinc-800 rounded flex items-center justify-center hover:border-amber-400/50 transition"
                  title={method.name}
                >
                  <span className="text-sm">{method.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryFooterBottom;
