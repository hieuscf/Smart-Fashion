import React, { useState } from "react";
import {
  Crown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Heart,
  Shield,
  Truck,
  Award,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const LuxuryFooter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  const collections = [
    { name: "Robes de Soirée", href: "#evening" },
    { name: "Robes de Mariée", href: "#wedding" },
    { name: "Robes de Cocktail", href: "#cocktail" },
    { name: "Collection Printemps", href: "#spring" },
    { name: "Sur Mesure", href: "#custom" },
  ];

  const services = [
    { name: "Consultation Privée", href: "#consultation" },
    { name: "Retouche & Ajustement", href: "#alterations" },
    { name: "Styliste Personnel", href: "#stylist" },
    { name: "Livraison Premium", href: "#delivery" },
    { name: "Guide des Tailles", href: "#size-guide" },
  ];

  const company = [
    { name: "Notre Histoire", href: "#about" },
    { name: "Lookbook 2024", href: "#lookbook" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Carrières", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const legal = [
    { name: "Conditions Générales", href: "#terms" },
    { name: "Politique de Confidentialité", href: "#privacy" },
    { name: "Retours & Échanges", href: "#returns" },
    { name: "Politique de Cookies", href: "#cookies" },
  ];

  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "Momo", icon: "📱" },
    { name: "VNPay", icon: "🏦" },
    { name: "COD", icon: "💵" },
  ];

  return (
    <footer className="bg-black border-t border-amber-900/20">
      {/* Premium Features Bar */}
      <div className="border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light text-sm mb-1">
                  Livraison Gratuite
                </h4>
                <p className="text-zinc-500 text-xs font-light">Dès 10M VND</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light text-sm mb-1">
                  Paiement Sécurisé
                </h4>
                <p className="text-zinc-500 text-xs font-light">SSL 256-bit</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light text-sm mb-1">
                  Qualité Garantie
                </h4>
                <p className="text-zinc-500 text-xs font-light">
                  Artisanat d'exception
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light text-sm mb-1">
                  Support 24/7
                </h4>
                <p className="text-zinc-500 text-xs font-light">
                  Service client dévoué
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full"></div>
                <Crown
                  className="w-10 h-10 text-amber-400 relative"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-light text-white tracking-wider">
                  ELÉGANCE
                </h2>
                <p className="text-[10px] text-amber-400/80 tracking-widest font-light">
                  HAUTE COUTURE
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
              Maison de haute couture dédiée à l'excellence. Chaque création est
              une œuvre d'art, façonnée avec passion et savoir-faire depuis
              2024.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-light mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Newsletter Exclusive</span>
              </h3>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full pl-4 pr-12 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition outline-none font-light placeholder-zinc-600 text-sm"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-500 rounded-md flex items-center justify-center hover:from-amber-500 hover:to-amber-400 transition"
                >
                  <Send className="w-4 h-4 text-black" strokeWidth={2} />
                </button>
              </div>
              {subscribed && (
                <p className="text-amber-400 text-xs font-light mt-2">
                  ✓ Merci de votre inscription!
                </p>
              )}
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white text-sm font-light mb-3">
                Suivez-nous
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-amber-400/10 hover:border-amber-400/50 transition group"
                >
                  <Facebook
                    className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="#instagram"
                  className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-amber-400/10 hover:border-amber-400/50 transition group"
                >
                  <Instagram
                    className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="#youtube"
                  className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-amber-400/10 hover:border-amber-400/50 transition group"
                >
                  <Youtube
                    className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Collections - 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-light text-sm mb-4 tracking-wide">
              Collections
            </h3>
            <ul className="space-y-3">
              {collections.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-zinc-400 hover:text-amber-400 transition font-light text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-light text-sm mb-4 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-zinc-400 hover:text-amber-400 transition font-light text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-light text-sm mb-4 tracking-wide">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-zinc-400 hover:text-amber-400 transition font-light text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-light text-sm mb-4 tracking-wide">
              Contact
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
                      Lun-Sam: 9h-20h
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
                      Réponse sous 24h
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
                      District 1, HCMC
                    </p>
                  </div>
                </a>
              </li>
            </ul>

            {/* Legal Links - Mobile */}
            <div className="mt-6 lg:hidden">
              <h3 className="text-white font-light text-sm mb-3 tracking-wide">
                Légal
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-zinc-500 text-xs font-light">
                © 2024 Elégance Couture. Tous droits réservés.
              </p>
              <p className="text-zinc-600 text-xs font-light mt-1">
                Conçu avec{" "}
                <Heart
                  className="w-3 h-3 inline text-amber-400"
                  strokeWidth={1.5}
                />{" "}
                à Ho Chi Minh Ville
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
                Méthodes de paiement acceptées
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

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
    </footer>
  );
};

export default LuxuryFooter;
