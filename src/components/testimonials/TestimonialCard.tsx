import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
  index: number;
}

function TestimonialCard({ content, author, role, rating, image, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        {/* Quote mark */}
        <div className="absolute -top-4 -left-2 text-6xl text-primary/20">"</div>

        {/* Rating */}
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-secondary fill-current" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-300 mb-6 relative z-10">{content}</p>

        {/* Author */}
        <div className="flex items-center">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <div className="font-semibold text-white">{author}</div>
            <div className="text-gray-400 text-sm">{role}</div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}