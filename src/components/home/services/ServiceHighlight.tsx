import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function ServiceHighlight() {
  const [text] = useTypewriter({
    words: ['SHINE', 'STAND OUT', 'SUCCEED'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl font-bold"
      >
        <span className="text-white">WE MAKE YOU </span>
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {text}
        </span>
        <Cursor cursorColor="#8E24AA" />
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto"
      >
        Transform your content with our professional video editing services
      </motion.p>
    </div>
  );
}

export default ServiceHighlight;