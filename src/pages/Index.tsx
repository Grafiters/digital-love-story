import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import GallerySection from "@/components/wedding/GallerySection";
import TimelineSection from "@/components/wedding/TimelineSection";
import GiftSection from "@/components/wedding/GiftSection";
import WishesSection from "@/components/wedding/WishesSection";
import FooterSection from "@/components/wedding/FooterSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import MapSection from "@/components/wedding/MapSection";
import InvitationSection from "@/components/wedding/InvitationSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <InvitationSection />
      <CoupleSection />
      <CountdownSection />
      <MapSection />
      <GallerySection />
      <GiftSection />
      <WishesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
