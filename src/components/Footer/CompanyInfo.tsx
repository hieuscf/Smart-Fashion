import {
  ShoppingBag,
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function CompanyInfo() {
  const socials = [
    { icon: Facebook, class: "bg-blue-600 hover:bg-blue-700" },
    {
      icon: Instagram,
      class:
        "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    },
    { icon: Twitter, class: "bg-blue-400 hover:bg-blue-500" },
    { icon: Youtube, class: "bg-red-600 hover:bg-red-700" },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl shadow-lg">
          <ShoppingBag className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">
          Shop<span className="text-orange-500">Hub</span>
        </h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        ShopHub là nền tảng thương mại điện tử hàng đầu...
      </p>

      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex items-center gap-3">
          <MapPin className="text-orange-500" />
          123 Đường ABC, Quận 1
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-orange-500" />
          1900-xxxx
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-orange-500" />
          support@shophub.vn
        </div>
        <div className="flex items-center gap-3">
          <Clock className="text-orange-500" />
          T2 - CN: 8:00 - 21:00
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        {socials.map((s, i) => (
          <button
            key={i}
            className={`${s.class} w-10 h-10 text-white rounded-lg flex items-center justify-center`}
          >
            <s.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
