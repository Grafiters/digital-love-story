import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import GallerySection from "@/components/wedding/GallerySection";
import TimelineSection from "@/components/wedding/TimelineSection";
import GiftSection from "@/components/wedding/GiftSection";
import WishesSection from "@/components/wedding/WishesSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CountdownSection />
      <GallerySection />
      <TimelineSection />
      <GiftSection />
      <WishesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
