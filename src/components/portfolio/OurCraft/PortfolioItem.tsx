import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Project } from './types';

interface PortfolioItemProps {
  project: Project;
}

function PortfolioItem({ project }: PortfolioItemProps) {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-primary text-sm font-medium mb-2 block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {project.description}
            </p>
          </div>
        </div>

        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
            <Play className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        {/* Glowing Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

export default PortfolioItem;