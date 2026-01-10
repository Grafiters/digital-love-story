import { Heart } from "lucide-react";

const timelineEvents = [
  {
    year: "2020",
    title: "Pertama Bertemu",
    description: "Kami pertama kali bertemu di daerah semarang.",
  },
  {
    year: "2021",
    title: "Mulai Berpacaran",
    description: "Setelah beberapa bulan berteman, kami memutuskan untuk memulai hubungan yang lebih serius.",
  },
  {
    year: "2023",
    title: "Bertunangan",
    description: "Di momen yang penuh kebahagiaan, kami berkomitmen untuk melangkah ke jenjang yang lebih serius.",
  },
  {
    year: "2026",
    title: "Menikah",
    description: "InsyaAllah, kami akan menyatukan hidup kami dalam ikatan suci pernikahan.",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Perjalanan Cinta</p>
          <h2 className="section-title text-primary mb-4">Kisah Kami</h2>
          <div className="gold-divider" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 text-secondary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <span className="inline-block px-3 py-1 text-xs font-body uppercase tracking-wider bg-gold/10 text-gold rounded-full mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-display text-xl text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
