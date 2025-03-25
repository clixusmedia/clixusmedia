import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';

export default function PortfolioCTA() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <Button 
        size="lg" 
        onClick={scrollToPortfolio}
        className="group"
      >
        View All Projects
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
}