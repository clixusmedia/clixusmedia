import { motion } from 'framer-motion';
import VideoGrid from './VideoGrid';
import CategoryFilter from './CategoryFilter';
import PortfolioCTA from './PortfolioCTA';
import { useVideoPortfolio } from './hooks/useVideoPortfolio';

export default function VideoPortfolioSection() {
  const { 
    videos,
    selectedCategory,
    setSelectedCategory,
    filteredVideos 
  } = useVideoPortfolio();

  return (
    <section id="portfolio" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Featured Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handcrafted video edits that captivate and inspire
          </p>
        </motion.div>
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <VideoGrid videos={filteredVideos} />
        <PortfolioCTA />
      </div>
    </section>
  );
}