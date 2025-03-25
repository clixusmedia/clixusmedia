import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24h', label: 'Average Response Time' },
  { value: '50+', label: 'Active Clients' }
];

function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          className="relative group"
        >
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-primary/5 rounded-xl -z-10 transform group-hover:scale-105 transition-transform duration-300" />
          
          {/* Content */}
          <div className="text-center p-6">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStats;