import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Eye } from 'lucide-react';
import { Video } from './types';

interface PortfolioModalProps {
  video: Video;
  onClose: () => void;
}

export default function PortfolioModal({ video, onClose }: PortfolioModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-4xl bg-background rounded-2xl overflow-hidden border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Preview */}
          <div className="relative aspect-video">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full bg-primary/90 text-white"
              >
                <Play className="w-8 h-8" />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
            <div className="flex items-center text-gray-400 mb-4">
              <Eye className="w-4 h-4 mr-2" />
              <span>{video.views}</span>
            </div>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}