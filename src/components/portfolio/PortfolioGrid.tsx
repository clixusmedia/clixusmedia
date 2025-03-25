import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { PortfolioItem } from '../../types/portfolio';
import PortfolioModal from './PortfolioModal';
import ShortFormCarousel from './ShortFormCarousel';

interface PortfolioGridProps {
  items: PortfolioItem[];
  category: string;
}

function PortfolioGrid({ items, category }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = category === 'All' 
    ? items 
    : items.filter(item => item.category === category);

  const regularItems = filteredItems.filter(item => item.category !== 'Short-form Video');
  const shortFormItems = filteredItems.filter(item => item.category === 'Short-form Video');

  return (
    <>
      {shortFormItems.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white">Short-form Content</h3>
          <ShortFormCarousel items={shortFormItems} onItemClick={setSelectedItem} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
        {regularItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-background/30 backdrop-blur-sm"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-video">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-medium mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {item.description}
                  </p>
                  {item.videoUrl && (
                    <span className="inline-flex items-center text-white hover:text-primary transition-colors duration-200">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Video
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}

export default PortfolioGrid;