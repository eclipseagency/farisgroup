"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Total Sports Solutions",
    subtitle: "Your Trusted Partner",
    description:
      "Faris Group is the leading supplier of superior quality sports and entertainment equipment in the Middle East with over 20 years of experience.",
    cta: "Explore Our Products",
    ctaHref: "/products",
    secondaryCta: "About Us",
    secondaryHref: "/about-us",
    bgColor: "from-navy-900 via-primary to-navy-900",
    image: "sports-hero",
  },
  {
    id: 2,
    title: "Padel Courts",
    subtitle: "World-Class Design",
    description:
      "Customize your padel court with our VISION, PANORAMIC, and FORTE models. Available in over 50 countries with efficient logistics and installation.",
    cta: "Discover Padel Courts",
    ctaHref: "/padel-court",
    secondaryCta: "Get a Quote",
    secondaryHref: "/contact",
    bgColor: "from-navy-900 via-primary to-navy-900",
    image: "padel-hero",
  },
  {
    id: 3,
    title: "Fitness & Gym Equipment",
    subtitle: "World-Class Facilities",
    description:
      "Set up your world-class fitness facility with cutting-edge equipment including treadmills, weight machines, and comprehensive gym solutions.",
    cta: "Explore Fitness",
    ctaHref: "/fitness-and-gym",
    secondaryCta: "Contact Us",
    secondaryHref: "/contact",
    bgColor: "from-navy-900 via-primary to-navy-900",
    image: "gym-hero",
  },
  {
    id: 4,
    title: "Construction Services",
    subtitle: "Complete Build Solutions",
    description:
      "From squash courts and home cinemas to bowling centers and football fields — we deliver full construction across your entire sports facility.",
    cta: "View Construction",
    ctaHref: "/construction",
    secondaryCta: "Get Started",
    secondaryHref: "/contact",
    bgColor: "from-navy-900 via-primary to-navy-900",
    image: "construction-hero",
  },
];

const heroImages: Record<string, string> = {
  "sports-hero": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80",
  "padel-hero": "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1920&q=80",
  "gym-hero": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
  "construction-hero": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImages[s.image]})`,
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(26,58,107,0.75) 50%, rgba(10,22,40,0.6) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-3xl">
            <div
              key={currentSlide}
              className="animate-fade-in"
            >
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5"
                style={{ color: "#c9a227", backgroundColor: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.3)" }}
              >
                {slide.subtitle}
              </span>
              <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                {slide.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:gap-3"
                  style={{ backgroundColor: "#c9a227" }}
                >
                  {slide.cta}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={slide.secondaryHref}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:bg-white hover:text-navy"
                  style={{ borderColor: "rgba(255,255,255,0.5)" }}
                >
                  {slide.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container-custom flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentSlide ? "w-8" : "w-3 bg-white/40"
                }`}
                style={{
                  backgroundColor: index === currentSlide ? "#c9a227" : undefined,
                }}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              className="w-10 h-10 flex items-center justify-center border border-white/30 text-white transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 flex items-center justify-center border border-white/30 text-white transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white font-bold text-2xl font-heading">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <div className="w-px h-12 bg-white/30" />
        <span className="text-white/40 text-sm font-heading">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
