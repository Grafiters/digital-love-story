import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-6 bg-brown-900 text-cream">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-display text-3xl mb-2">Andi & Sarah</h2>
        <p className="text-cream/60 text-sm font-body mb-6">15 Februari 2025</p>
        
        <div className="gold-divider mb-6" />
        
        <p className="text-cream/80 text-sm font-body italic mb-4">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
          pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, 
          dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>
        <p className="text-gold text-sm font-body">— QS. Ar-Rum: 21</p>
        
        <div className="mt-8 pt-8 border-t border-cream/10">
          <p className="text-cream/50 text-xs font-body flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-gold" /> using Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
