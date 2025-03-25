import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative aspect-video">
            {item.videoUrl ? (
              <iframe
                src={item.videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>

          <div className="p-6">
            <span className="text-primary text-sm font-medium mb-2 block">
              {item.category}
            </span>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            
            {item.details && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Project Details</h4>
                <p className="text-gray-600">{item.details}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PortfolioModal;