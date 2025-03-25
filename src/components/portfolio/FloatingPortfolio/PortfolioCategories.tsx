import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../../ui/Button';

const categories = [
  'All Work',
  'Video Editing',
  'Motion Graphics',
  'Short Form',
  'Thumbnails'
];

export default function PortfolioCategories() {
  const [activeCategory, setActiveCategory] = useState('All Work');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 mb-16"
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveCategory(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </motion.div>
  );
}