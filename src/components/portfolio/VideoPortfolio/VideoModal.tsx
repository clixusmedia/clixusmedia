import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Eye, Calendar, Tag } from 'lucide-react';
import { VideoProject } from './types';

interface VideoModalProps {
  video: VideoProject;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
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
          className="relative w-full max-w-5xl bg-background rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Player */}
          <div className="relative aspect-video">
            {video.videoUrl ? (
              <iframe
                src={video.videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <Play className="w-16 h-16 text-white/50" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {video.date}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {video.category}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {video.views}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              {video.title}
            </h2>
            
            <p className="text-gray-300 mb-6">
              {video.description}
            </p>

            {video.details && (
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Project Details
                </h3>
                <p className="text-gray-300">
                  {video.details}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}