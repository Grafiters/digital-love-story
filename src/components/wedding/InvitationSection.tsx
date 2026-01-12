import { Mail, Users, Heart, User } from "lucide-react";

type GuestType = 'individual' | 'couple' | 'family';

interface GuestInfo {
  type: GuestType;
  name: string;
  partner?: string;
  prefix: string;
}

const InvitationSection = () => {
  const params = new URLSearchParams(window.location.search);
  
  // URL Query Examples:
  // Individual: ?to=Budi
  // Couple: ?to=Budi&partner=Siti  atau  ?to=Budi %26 Siti (dengan &)
  // Family: ?to=Budi&type=family  atau  ?family=Budi
  
  const getGuestInfo = (): GuestInfo => {
    const name = params.get('to') || params.get('family') || 'Tamu Undangan';
    const typeParam = params.get('type');
    const isFamily = params.has('family') || typeParam === 'family';
    const isPartenr = typeParam === 'partner'
    
    if (isFamily) {
      return {
        type: 'family',
        name: name,
        prefix: 'Keluarga'
      };
    }
    
    if (isPartenr) {
      return {
        type: 'couple',
        name: name,
        partner: "Pasangan",
        prefix: 'Bapak/Ibu'
      };
    }
    
    return {
      type: 'individual',
      name: name,
      prefix: 'Bapak/Ibu/Saudara/i'
    };
  };

  const guest = getGuestInfo();

  const getIcon = () => {
    switch (guest.type) {
      case 'family':
        return <Users className="w-10 h-10 mx-auto mb-4 text-primary/70" />;
      case 'couple':
        return <Heart className="w-10 h-10 mx-auto mb-4 text-primary/70" />;
      default:
        return <User className="w-10 h-10 mx-auto mb-4 text-primary/70" />;
    }
  };

  const renderGuestName = () => {
    if (guest.type === 'couple' && guest.partner) {
      return (
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          {guest.name} <span className="text-primary">&</span> {guest.partner}
        </h2>
      );
    }
    
    if (guest.type === 'family') {
      return (
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Keluarga Besar<br />
          <span className="text-primary">{guest.name}</span>
        </h2>
      );
    }
    
    return (
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
        {guest.name}
      </h2>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <Mail className="w-8 h-8 mx-auto mb-2 text-primary/50" />
          {getIcon()}
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
            Kepada Yth.
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            {guest.prefix}
          </p>
          {renderGuestName()}
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di acara pernikahan kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;