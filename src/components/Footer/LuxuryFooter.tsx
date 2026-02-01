import { collections, services, company } from "./footerData";
import LuxuryFooterFeatures from "./components/LuxuryFooterFeatures";
import LuxuryFooterBrand from "./components/LuxuryFooterBrand";
import LuxuryFooterLinks from "./components/LuxuryFooterLinks";
import LuxuryFooterContact from "./components/LuxuryFooterContact";
import LuxuryFooterBottom from "./components/LuxuryFooterBottom";

const LuxuryFooter = () => {
  return (
    <footer className="bg-black border-t border-amber-900/20">
      {/* Premium Features Bar */}
      <LuxuryFooterFeatures />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - 4 cols */}
          <LuxuryFooterBrand />

          {/* Collections - 2 cols */}
          <LuxuryFooterLinks title="Collections" links={collections} />

          {/* Services - 2 cols */}
          <LuxuryFooterLinks title="Services" links={services} />

          {/* Company - 2 cols */}
          <LuxuryFooterLinks title="Về Chúng Tôi" links={company} />

          {/* Contact Info - 2 cols */}
          <LuxuryFooterContact />
        </div>
      </div>

      {/* Bottom Bar */}
      <LuxuryFooterBottom />

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
    </footer>
  );
};

export default LuxuryFooter;
