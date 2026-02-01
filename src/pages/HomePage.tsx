import { useState, useEffect } from "react";
import {
  Crown,
  ChevronRight,
  Star,
  Heart,
  ShoppingBag,
  Sparkles,
  Award,
  Clock,
  Shield,
  Play,
  ArrowRight,
  Quote,
  Instagram,
  ChevronLeft,
} from "lucide-react";

const LuxuryHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const heroSlides = [
    {
      title: "Collection Printemps 2024",
      subtitle: "L'Élégance Intemporelle",
      description: "Découvrez notre nouvelle collection de robes haute couture",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1920&h=1080&fit=crop",
      cta: "Découvrir",
    },
    {
      title: "Robes de Mariée",
      subtitle: "Votre Jour Parfait",
      description: "Des créations uniques pour le plus beau jour de votre vie",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop",
      cta: "Explorer",
    },
    {
      title: "Sur Mesure",
      subtitle: "Créé Pour Vous",
      description: "Un service personnalisé pour une robe qui vous ressemble",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&h=1080&fit=crop",
      cta: "Consulter",
    },
  ];

  const categories = [
    { id: "all", name: "Tout", count: 156 },
    { id: "evening", name: "Soirée", count: 48 },
    { id: "wedding", name: "Mariée", count: 32 },
    { id: "cocktail", name: "Cocktail", count: 42 },
    { id: "custom", name: "Sur Mesure", count: 34 },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Robe de Soirée Midnight",
      price: "15,500,000",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
      category: "evening",
      rating: 5.0,
      reviews: 24,
      badge: "Nouveau",
    },
    {
      id: 2,
      name: "Robe de Mariée Aurora",
      price: "45,000,000",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
      category: "wedding",
      rating: 4.9,
      reviews: 18,
      badge: "Exclusif",
    },
    {
      id: 3,
      name: "Robe de Cocktail Sunset",
      price: "8,900,000",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
      category: "cocktail",
      rating: 4.8,
      reviews: 31,
      badge: null,
    },
    {
      id: 4,
      name: "Création Sur Mesure",
      price: "Sur Devis",
      image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop",
      category: "custom",
      rating: 5.0,
      reviews: 12,
      badge: "VIP",
    },
  ];

  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Mariée 2024",
      content:
        "Une expérience absolument magique. La robe de mes rêves, confectionnée avec une attention aux détails exceptionnelle.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Sophie Martin",
      role: "Cliente VIP",
      content:
        "Le service sur mesure est incomparable. Chaque visite est une expérience de luxe. Je recommande absolument.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Claire Bernard",
      role: "Événementiel",
      content:
        "Des créations uniques qui font toute la différence. La qualité et l'élégance au rendez-vous à chaque fois.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Matériaux nobles et savoir-faire artisanal",
    },
    {
      icon: Clock,
      title: "Service Rapide",
      description: "Livraison sous 7-14 jours",
    },
    {
      icon: Shield,
      title: "Garantie 2 Ans",
      description: "Retouches gratuites incluses",
    },
    {
      icon: Sparkles,
      title: "Personnalisation",
      description: "Chaque détail selon vos souhaits",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section avec Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles
                    className="w-5 h-5 text-amber-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-amber-400 text-sm font-light tracking-widest uppercase">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 tracking-wide">
                  {slide.title}
                </h1>

                <p className="text-xl text-zinc-300 font-light mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex items-center gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg font-light tracking-wide hover:from-amber-500 hover:to-amber-400 transition flex items-center gap-2 shadow-lg shadow-amber-900/20">
                    <span>{slide.cta}</span>
                    <ChevronRight
                      className="w-5 h-5 group-hover:translate-x-1 transition"
                      strokeWidth={1.5}
                    />
                  </button>

                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-light tracking-wide hover:bg-white/20 transition">
                    En Savoir Plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-10"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-10"
        >
          <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-amber-400"
                  : "w-1 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-zinc-800/50 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/20 transition">
                  <feature.icon
                    className="w-6 h-6 text-amber-400"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-white font-light text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <Crown className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-4 tracking-wide">
              Nos Collections
            </h2>
            <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
              Des créations uniques, confectionnées avec passion et savoir-faire
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-light tracking-wide transition ${
                  activeCategory === category.id
                    ? "bg-amber-400 text-black"
                    : "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-amber-400/50 hover:text-amber-400"
                }`}
              >
                {category.name}{" "}
                <span className="text-xs ml-1">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-zinc-950/50 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-amber-400/30 transition"
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-amber-400 text-black text-xs font-light tracking-wide rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-amber-400 transition">
                      <Heart className="w-5 h-5 text-black" strokeWidth={1.5} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-amber-400 transition">
                      <ShoppingBag
                        className="w-5 h-5 text-black"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-light text-base flex-1">
                      {product.name}
                    </h3>
                    <button className="text-zinc-500 hover:text-amber-400 transition">
                      <Heart className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-zinc-700"
                        }`}
                        strokeWidth={1.5}
                      />
                    ))}
                    <span className="text-zinc-500 text-xs ml-1 font-light">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-lg font-light">
                      {product.price} {product.price !== "Sur Devis" && "VND"}
                    </span>
                    <button className="text-zinc-400 hover:text-amber-400 transition">
                      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg font-light tracking-wide hover:border-amber-400/50 hover:text-amber-400 transition inline-flex items-center gap-2">
              <span>Voir Toutes les Collections</span>
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles
                  className="w-5 h-5 text-amber-400"
                  strokeWidth={1.5}
                />
                <span className="text-amber-400 text-sm font-light tracking-widest uppercase">
                  Notre Histoire
                </span>
              </div>

              <h2 className="text-4xl font-serif font-light text-white mb-6 tracking-wide">
                L'Art de la Haute Couture
              </h2>

              <p className="text-zinc-400 text-base font-light leading-relaxed mb-6">
                Depuis 2024, Elégance incarne l'excellence de la haute couture
                vietnamienne. Chaque création est le fruit d'un savoir-faire
                artisanal minutieux et d'une passion pour la perfection.
              </p>

              <p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                Nos ateliers combinent techniques traditionnelles et innovations
                modernes pour créer des pièces uniques qui subliment votre
                élégance naturelle.
              </p>

              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg font-light tracking-wide hover:from-amber-500 hover:to-amber-400 transition inline-flex items-center gap-2">
                <span>Découvrir Notre Atelier</span>
                <Play className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=1200&h=800&fit=crop"
                alt="Atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition flex items-center justify-center">
                <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <Play
                    className="w-8 h-8 text-black ml-1"
                    strokeWidth={1.5}
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-white mb-4 tracking-wide">
              Témoignages Clients
            </h2>
            <p className="text-zinc-400 text-lg font-light">
              Ce que nos clientes disent de nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-8 hover:border-amber-400/30 transition"
              >
                <Quote
                  className="w-10 h-10 text-amber-400/30 mb-4"
                  strokeWidth={1.5}
                />

                <p className="text-zinc-300 font-light leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-light">{testimonial.name}</p>
                    <p className="text-zinc-500 text-sm font-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-950/20 via-zinc-900/20 to-rose-950/20 border-y border-amber-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown
            className="w-16 h-16 text-amber-400 mx-auto mb-6"
            strokeWidth={1.5}
          />

          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6 tracking-wide">
            Prête Pour Votre Robe de Rêve?
          </h2>

          <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation privée. Nos stylistes vous
            accompagnent dans la création de votre pièce unique.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg font-light tracking-wide hover:from-amber-500 hover:to-amber-400 transition shadow-lg shadow-amber-900/20">
              Prendre Rendez-vous
            </button>
            <button className="px-8 py-4 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg font-light tracking-wide hover:border-amber-400/50 hover:text-amber-400 transition">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif font-light text-white tracking-wide">
                @elegance_couture
              </h2>
            </div>
            <p className="text-zinc-400 text-base font-light">
              Suivez-nous sur Instagram pour plus d'inspiration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-zinc-900 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    1560243842 + i
                  }?w=400&h=400&fit=crop`}
                  alt={`Instagram ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryHomepage;
