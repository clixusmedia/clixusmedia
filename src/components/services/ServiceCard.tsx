import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  index: number;
}

function ServiceCard({ title, description, icon, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8",
        "bg-gradient-to-br from-[#121212] to-[#2C003E]",
        "border border-white/10 shadow-xl",
        "transition-all duration-300"
      )}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Icon with Glow Effect */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full transform group-hover:scale-110 transition-transform duration-300" />
          <div className="relative text-primary transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-6">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className="flex items-center text-gray-300"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={cn(
            "inline-flex items-center space-x-2",
            "text-white font-medium",
            "group/btn hover:text-primary",
            "transition-colors duration-300"
          )}
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}