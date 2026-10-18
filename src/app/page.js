
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyUsSection from "@/components/home/WhyUsSection";
import WorkProcess from "@/components/home/WorkProcess";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";
import LatestArticles from "@/components/home/LatestArticles";
import FaqSection from "@/components/home/FaqSection";
import ContactCta from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <>
   
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <FeaturedProjects />
      <WhyUsSection />
     
      <AboutPreview />
      <Testimonials />
      {/* <LatestArticles /> */}
      <FaqSection />
      <ContactCta />
    </>
  );
}
