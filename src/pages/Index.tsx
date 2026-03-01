import HeroSection from "@/components/home/HeroSection";
import FeaturedImages from "@/components/home/FeaturedImages";
import FeaturedVideos from "@/components/home/FeaturedVideos";
import ServiceTypes from "@/components/home/ServiceTypes";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedImages />
      <FeaturedVideos />
      <ServiceTypes />
      <Testimonials />
    </main>
  );
};

export default Index;
