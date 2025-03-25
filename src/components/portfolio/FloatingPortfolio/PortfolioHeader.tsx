import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function PortfolioHeader() {
  const [text] = useTypewriter({
    words: ['EXCELLENCE', 'CREATIVITY', 'INNOVATION'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="text-center mb-20 relative">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="inline-block text-primary font-medium mb-4"
      >
        Featured Works
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Showcasing{' '}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {text}
        </span>
        <Cursor cursorColor="#8E24AA" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto"
      >
        Discover our handcrafted video edits that captivate and inspire
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8"
      />
    </div>
  );
}

export default PortfolioHeader;