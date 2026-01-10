import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  const latitude = -7.2046839;
  const longitude = 111.0686009;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTInMTYuOSJTIDExMcKwMDQnMDcuMCJF!5e0!3m2!1sen!2sid!4v1234567890`;

  return (
    <section className="py-16 md:py-24 bg-romantic">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-body text-sm tracking-wider uppercase">Peta Lokasi</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Temukan Kami
          </h2>
          <p className="font-body text-muted-foreground">
            Prau RT 02, RW 06 Mlowonkarangtalun, Kec. Pulokulon, Kab. Grobogan, Jawa Tengah
          </p>
        </div>

        {/* Map embed */}
        <div className="map-container aspect-video md:aspect-[16/9] w-full mb-8">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan"
            className="w-full h-full"
          />
        </div>

        {/* Action button */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="font-body bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8"
            onClick={() => window.open(googleMapsUrl, '_blank')}
          >
            <Navigation className="w-4 h-4" />
            Buka di Google Maps
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
