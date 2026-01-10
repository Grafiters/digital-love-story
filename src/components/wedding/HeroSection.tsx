import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const countdownSection = document.getElementById("countdown");
    countdownSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay-hero" />
      
      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-lg mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-cream/80 text-sm uppercase tracking-[0.4em] mb-4 font-body">
          Undangan Pernikahan
        </p>
        
        <div className="gold-divider mb-8" />
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-light tracking-wide mb-4">
          Grafit
        </h1>
        
        <p className="text-gold text-3xl font-display italic mb-4">&</p>
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-light tracking-wide mb-8">
          Anggi
        </h1>
        
        <div className="gold-divider mb-8" />
        
        <p className="text-cream/90 text-lg font-body font-light tracking-wide">
          31 Januari 2026
        </p>
        
        <p className="text-cream/70 text-sm font-body mt-2">
          Prau, Mlowokarangtalun, Kec. Pulokulon, Kab. Grobogan
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 hover:text-cream transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
