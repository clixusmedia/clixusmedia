import { motion } from 'framer-motion';

function ServicesHeader() {
  return (
    <div className="text-center mb-16 relative">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Our Services
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Professional video editing solutions tailored to your creative vision
        </p>
      </motion.div>
    </div>
  );
}