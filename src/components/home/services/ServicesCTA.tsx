import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

export default function ServicesCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center pt-12"
    >
      <h3 className="text-3xl font-bold text-white mb-6">
        Ready to Transform Your Content?
      </h3>
      <Link to="/contact">
        <Button size="lg" className="group">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </motion.div>
  );
}