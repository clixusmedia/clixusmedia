import { motion } from 'framer-motion';

interface ProcessStepProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}

function ProcessStep({ icon, title, description, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Step Number */}
      <div className="absolute -left-4 -top-4 text-6xl font-bold text-primary/10">
        {index + 1}
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* Connection Line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-1/2 -right-12 w-24 h-px bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
      )}
    </motion.div>
  );
}