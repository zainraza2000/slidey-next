import CraftSection from "@/components/Craft/CraftSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/HeroSection";
import IdeaSection from "@/components/IdeaSection";
import OurWorkSection from "@/components/OurWork/OurWorkSection";
import ProvenSection from "@/components/Proven/ProvenSection";
import RankingSection from "@/components/RankingSection";
import StorylineSection from "@/components/StorylineSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import ClientSection from "@/components/client/ClientSection";
import PricingSection from "@/components/pricing/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdeaSection />
      <ClientSection />
      <RankingSection />
      <StorylineSection />
      <ProvenSection />
      <CraftSection />
      <TestimonialSection />
      <FAQ />
      <PricingSection />
      <OurWorkSection />
      <Footer />
    </>
  );
}
