import { motion } from 'framer-motion';
import { useState } from 'react';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { PortfolioItem } from '../types/portfolio';
import Button from '../components/ui/Button';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Short-form Video',
    'Long-form Video',
    'Thumbnail Design',
    'Graphics & Animation'
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Mountain Adventure Series',
      category: 'Long-form Video',
      thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000',
      videoUrl: 'https://example.com/video1',
      description: 'A breathtaking documentary series showcasing extreme sports and nature.',
      details: 'A 6-part documentary series following professional athletes as they tackle the world\'s most challenging peaks.'
    },
    {
      id: '2',
      title: 'Tech Product Launch',
      category: 'Short-form Video',
      thumbnail: 'https://images.unsplash.com/photo-1682687221038-404670f01d03?auto=format&fit=crop&q=80&w=1000',
      videoUrl: 'https://example.com/video2',
      description: 'Dynamic product reveal video for a cutting-edge tech startup.',
      details: 'A series of 15-second teasers and a 60-second main reveal video for social media.'
    },
    {
      id: '3',
      title: 'Culinary Masterclass',
      category: 'Long-form Video',
      thumbnail: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=1000',
      videoUrl: 'https://example.com/video3',
      description: 'Professional cooking tutorials with cinematic quality.',
      details: 'A 12-episode series featuring Michelin-starred chefs sharing their signature recipes.'
    },
    {
      id: '4',
      title: 'Fashion Collection',
      category: 'Graphics & Animation',
      thumbnail: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&q=80&w=1000',
      description: 'Animated graphics for a luxury fashion brand campaign.',
      details: 'Custom motion graphics and transitions for a high-end fashion house\'s digital campaign.'
    },
    {
      id: '5',
      title: 'Travel Vlog Series',
      category: 'Thumbnail Design',
      thumbnail: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?auto=format&fit=crop&q=80&w=1000',
      description: 'Eye-catching thumbnails for a popular travel channel.',
      details: 'A complete thumbnail redesign for a travel vlog series with over 1M subscribers.'
    },
    {
      id: '6',
      title: 'Music Festival Highlights',
      category: 'Short-form Video',
      thumbnail: 'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&q=80&w=1000',
      videoUrl: 'https://example.com/video6',
      description: 'High-energy festival recap videos with dynamic editing.',
      details: 'A series of 30-second highlight reels from a major music festival.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our best work in video editing, animation, and design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <PortfolioGrid
            items={portfolioItems}
            category={selectedCategory}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Ready to Create Your Next Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with our professional video editing services.
          </p>
          <Button
            size="lg"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;