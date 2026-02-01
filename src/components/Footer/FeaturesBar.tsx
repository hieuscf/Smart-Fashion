import { Truck, Shield, Headphones, CreditCard } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    {
      icon: Truck,
      title: "Miễn phí vận chuyển",
      desc: "Cho đơn hàng từ 500.000đ",
    },
    {
      icon: Shield,
      title: "Thanh toán an toàn",
      desc: "100% bảo mật thông tin",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      desc: "Tư vấn mọi lúc mọi nơi",
    },
    {
      icon: CreditCard,
      title: "Đa dạng thanh toán",
      desc: "Nhiều phương thức lựa chọn",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-4 group">
            <div className="bg-orange-100 p-3 rounded-xl group-hover:bg-orange-200 transition-colors">
              <f.icon className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">{f.title}</h4>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
