import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/services/ServicesSection';
import VideoPortfolioSection from '../components/portfolio/VideoPortfolio/VideoPortfolioSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/contact/ContactSection';
import CTASection from '../components/home/CTASection';

function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <ServicesSection />
      <VideoPortfolioSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </div>
  );
}

export default Home;