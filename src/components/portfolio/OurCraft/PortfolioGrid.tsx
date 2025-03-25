import { motion } from 'framer-motion';
import { Project } from './types';
import PortfolioItem from './PortfolioItem';

interface PortfolioGridProps {
  projects: Project[];
}

function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PortfolioItem project={project} />
        </motion.div>
      ))}
    </div>
  );
}

export default PortfolioGrid;