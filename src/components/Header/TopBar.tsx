import { MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>
                Giao hàng : <strong>Toàn quốc</strong>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>🔥 Miễn phí vận chuyển cho đơn từ 500k</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Hotline: 1900-0000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
