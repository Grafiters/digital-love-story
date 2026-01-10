import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = new Date("2025-02-15T10:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <section id="countdown" className="py-20 px-6 bg-card">
      <div className="max-w-lg mx-auto text-center">
        <p className="section-subtitle mb-3">Menghitung Hari</p>
        <h2 className="section-title text-primary mb-8">Waktu Menuju Hari Bahagia</h2>
        <div className="gold-divider mb-12" />

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 mb-12">
          {timeBlocks.map((block, index) => (
            <div key={index} className="elegant-border bg-background p-4 rounded-xl">
              <span className="font-display text-3xl md:text-4xl text-secondary font-semibold block">
                {block.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-body">
                {block.label}
              </span>
            </div>
          ))}
        </div>

        {/* Event Details */}
        <div className="space-y-6">
          <div className="wedding-card">
            <h3 className="font-display text-xl text-primary mb-4">Akad Nikah</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Sabtu, 15 Februari 2025</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>08:00 - 10:00 WIB</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Masjid Al-Ikhlas, Jakarta</span>
              </div>
            </div>
          </div>

          <div className="wedding-card">
            <h3 className="font-display text-xl text-primary mb-4">Resepsi</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Sabtu, 15 Februari 2025</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>11:00 - 14:00 WIB</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Hotel Grand Ballroom, Jakarta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
