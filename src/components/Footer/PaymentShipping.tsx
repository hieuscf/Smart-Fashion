import { CreditCard, Wallet, Truck } from "lucide-react";

export default function PaymentShipping() {
  const payments = [
    {
      name: "Visa",
      img: "/assets/payments/Visa.png",
    },
    {
      name: "Mastercard",
      img: "/assets/payments/Mastercard-Logo.png",
    },
    {
      name: "Momo",
      img: "/assets/payments/Momo.png",
    },
    {
      name: "VNPay",
      img: "/assets/payments/Vnpay.jpg",
    },
  ];

  const shippings = [
    {
      name: "Giao hàng nhanh",
      img: "/assets/shippings/GHN.png",
    },
    {
      name: "GHTK",
      img: "/assets/shippings/GHTK.png",
    },
    {
      name: "J&T Express",
      img: "/assets/shippings/J&T.png",
    },
    {
      name: "Viettel Post",
      img: "/assets/shippings/Vietelpost.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Payments */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-orange-500" />
          <h4 className="font-semibold text-gray-800 text-lg">
            Phương thức thanh toán
          </h4>
        </div>

        <div className="flex flex-wrap gap-4">
          {payments.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
            >
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-10 h-6 object-contain"
                />
              ) : (
                <Wallet className="w-6 h-6 text-gray-500" />
              )}
              <span className="text-gray-700 text-sm font-medium">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Shippings */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Truck className="w-5 h-5 text-orange-500" />
          <h4 className="font-semibold text-gray-800 text-lg">
            Đối tác vận chuyển
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {shippings.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
            >
              {s.img ? (
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-16 h-10 object-contain"
                />
              ) : (
                <Truck className="w-6 h-6 text-gray-500" />
              )}
              <p className="text-gray-700 text-sm font-medium text-center">
                {s.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
