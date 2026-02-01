import FeaturesBar from "./FeaturesBar";
import FooterMain from "./FooterMain";
import PaymentShipping from "./PaymentShipping";
import BottomBar from "./BottomBar";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <FeaturesBar />
      <FooterMain />
      <PaymentShipping />
      <BottomBar />
    </footer>
  );
}
