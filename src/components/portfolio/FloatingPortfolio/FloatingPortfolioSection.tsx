import { motion } from 'framer-motion';
import FloatingVideo from './FloatingVideo';
import PortfolioBackground from './PortfolioBackground';
import PortfolioHeader from './PortfolioHeader';
import { portfolioVideos } from './data';
import { ArrowRight } from 'lucide-react';
import PortfolioCategories from './PortfolioCategories';
import PortfolioShowcase from './PortfolioShowcase';
import PortfolioCTA from './PortfolioCTA';

export default function FloatingPortfolioSection() {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <PortfolioBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <PortfolioHeader />
        <PortfolioCategories />
        <PortfolioShowcase />
        <PortfolioCTA />
      </div>
    </section>
  );
}