import { Phone, Mail, MapPin } from "lucide-react";
import { legal } from "../footerData";

const LuxuryFooterContact = () => {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-white font-light text-sm mb-4 tracking-wide">
        Liên Hệ
      </h3>
      <ul className="space-y-4">
        <li>
          <a
            href="tel:+84123456789"
            className="flex items-start gap-3 text-zinc-400 hover:text-amber-400 transition group"
          >
            <Phone
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-sm font-light">+84 123 456 789</p>
              <p className="text-xs text-zinc-600 font-light">
                Thứ 2 - Thứ 7: 9h - 20h
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="mailto:contact@elegance.com"
            className="flex items-start gap-3 text-zinc-400 hover:text-amber-400 transition group"
          >
            <Mail
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-sm font-light">contact@elegance.com</p>
              <p className="text-xs text-zinc-600 font-light">
                Phản hồi trong 24h
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#location"
            className="flex items-start gap-3 text-zinc-400 hover:text-amber-400 transition group"
          >
            <MapPin
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-sm font-light">123 Đồng Khởi</p>
              <p className="text-xs text-zinc-600 font-light">
                Quận 1, TP.HCM
              </p>
            </div>
          </a>
        </li>
      </ul>

      {/* Legal Links - Mobile */}
      <div className="mt-6 lg:hidden">
        <h3 className="text-white font-light text-sm mb-3 tracking-wide">
          Pháp Lý
        </h3>
        <ul className="space-y-2">
          {legal.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-zinc-500 hover:text-amber-400 transition font-light text-xs"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LuxuryFooterContact;
