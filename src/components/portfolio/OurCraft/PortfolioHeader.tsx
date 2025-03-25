import { motion } from 'framer-motion';

function PortfolioHeader() {
  return (
    <div className="text-center mb-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        {/* Split Text Animation */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Craft
          </motion.h2>
        </div>
        
        {/* Gradient Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto"
      >
        A Showcase of Excellence and Creativity
      </motion.p>
    </div>
  );
}

export default PortfolioHeader;