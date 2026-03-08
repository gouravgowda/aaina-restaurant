import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import ParallaxBanner from "@/components/ParallaxBanner";
import SpecialtyGrid from "@/components/SpecialtyGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedDishes />
      <ParallaxBanner />
      <SpecialtyGrid />
      <Footer />
    </main>
  );
}
