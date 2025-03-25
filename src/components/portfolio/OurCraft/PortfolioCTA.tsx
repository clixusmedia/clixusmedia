import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';

function PortfolioCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-3xl font-bold text-white mb-6">
        Loved What You Saw?
        <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Let's Create Something Amazing Together
        </span>
      </h3>
      <Button
        size="lg"
        onClick={scrollToContact}
        className="group"
      >
        Get in Touch
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
}

export default PortfolioCTA;