import CompanyInfo from "./CompanyInfo";
import FooterLinks from "./FooterLinks";

export default function FooterMain() {
  const footerLinks = {
    about: [
      "Giới thiệu ShopHub",
      "Tuyển dụng",
      "Điều khoản ShopHub",
      "Chính sách bảo mật",
      "Chính sách cookie",
      "Giải quyết khiếu nại",
    ],
    customer: [
      "Trung tâm trợ giúp",
      "Hướng dẫn mua hàng",
      "Hướng dẫn bán hàng",
      "Thanh toán",
      "Vận chuyển",
      "Trả hàng & Hoàn tiền",
    ],
    categories: [
      "Điện thoại & Phụ kiện",
      "Laptop & Máy tính",
      "Thời trang Nam",
      "Thời trang Nữ",
      "Mỹ phẩm",
      "Đồ gia dụng",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2">
        <CompanyInfo />
      </div>

      <FooterLinks title="Về ShopHub" items={footerLinks.about} />
      <FooterLinks title="Chăm sóc khách hàng" items={footerLinks.customer} />
      <FooterLinks title="Danh mục nổi bật" items={footerLinks.categories} />
    </div>
  );
}
