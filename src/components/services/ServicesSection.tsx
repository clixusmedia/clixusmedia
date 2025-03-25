import { motion } from 'framer-motion';
import ServicesHeader from './ServicesHeader';
import ServicesGrid from './ServicesGrid';

function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 -left-48 w-96 h-96 bg-primary/30 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 -right-48 w-96 h-96 bg-secondary/30 rounded-full filter blur-[128px] animate-pulse delay-1000" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}