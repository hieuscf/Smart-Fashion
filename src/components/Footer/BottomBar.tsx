export default function BottomBar() {
  return (
    <div className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© 2024 ShopHub. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a className="hover:text-orange-500">Chính sách bảo mật</a>
          <a className="hover:text-orange-500">Điều khoản sử dụng</a>
          <a className="hover:text-orange-500">Sitemap</a>
        </div>
      </div>
    </div>
  );
}
