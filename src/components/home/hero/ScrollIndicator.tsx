import { motion } from 'framer-motion';

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-[30px] h-[50px] rounded-full border-2 border-primary/50 p-2">
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2 }}
        className="text-sm text-gray-400 mt-2 text-center"
      >
        Scroll to explore
      </motion.p>
    </motion.div>
  );
}

export default ScrollIndicator;