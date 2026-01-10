import { Heart, Instagram } from "lucide-react";

import grafit from "@/assets/grafit.jpg";
import anggi from "@/assets/anggi.jpg";

interface CoupleProfile {
  name: string;
  fullName: string;
  parentInfo: string;
  description: string;
  image: string;
  instagram?: string;
}

const groomData: CoupleProfile = {
  name: "Grafit",
  fullName: "Bayu Grafit Nur Alfian",
  parentInfo: "Putra dari Bpk. Wahyuto & Ibu Emik Trimah Murtini",
  description: "Anak pertama dari tiga bersaudara",
  image: grafit,
  instagram: "bayugrafit"
};

const brideData: CoupleProfile = {
  name: "Anggi",
  fullName: "Anggi Ayu Wandari",
  parentInfo: "Putri dari Bpk. Ngasmo & Ibu Sujiati",
  description: "Anak kedua dari dua bersaudara",
  image: anggi,
  instagram: "anggiayuuuuuw"
};

const CoupleCard = ({ data, position }: { data: CoupleProfile; position: 'left' | 'right' }) => (
  <div className={`flex flex-col items-center animate-fadeInUp opacity-0 ${position === 'left' ? 'delay-200' : 'delay-400'}`} style={{ animationFillMode: 'forwards' }}>
    {/* Image container */}
    <div className="relative mb-6">
      {/* Decorative frame */}
      <div className="absolute -inset-3 rounded-full border-2 border-champagne opacity-50" />
      <div className="absolute -inset-6 rounded-full border border-rose-gold/30" />
      
      {/* Image */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-elegant border-4 border-champagne">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${data.name}&size=256&background=f5e6e0&color=d4918a&font-size=0.4`;
          }}
        />
      </div>
      
      {/* Heart decoration */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blush flex items-center justify-center shadow-soft">
        <Heart className="w-5 h-5 text-primary fill-primary" />
      </div>
    </div>

    {/* Details */}
    <div className="text-center max-w-xs">
      <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">
        {data.name}
      </h3>
      <p className="font-body text-sm md:text-base font-medium text-foreground mb-3">
        {data.fullName}
      </p>
      <p className="font-body text-sm text-muted-foreground mb-1">
        {data.parentInfo}
      </p>
      <p className="font-body text-xs text-muted-foreground italic mb-4">
        {data.description}
      </p>
      
      {data.instagram && (
        <a
          href={`https://instagram.com/${data.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Instagram className="w-4 h-4" />
          <span className="font-body text-sm">@{data.instagram}</span>
        </a>
      )}
    </div>
  </div>
);

const CoupleSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeIn">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Mempelai
          </h2>
          <div className="ornament-line w-24 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan 
            acara pernikahan putra-putri kami
          </p>
        </div>

        {/* Couple cards */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-16">
          {/* Groom - Left */}
          <CoupleCard data={groomData} position="left" />

          {/* Bride - Right */}
          <CoupleCard data={brideData} position="right" />
        </div>

        {/* Connecting element */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="ornament-line w-16 md:w-24" />
            <div className="relative">
              <Heart className="w-8 h-8 text-primary animate-heartbeat" />
              <Heart className="absolute inset-0 w-8 h-8 text-primary/30 animate-ping" />
            </div>
            <div className="ornament-line w-16 md:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
