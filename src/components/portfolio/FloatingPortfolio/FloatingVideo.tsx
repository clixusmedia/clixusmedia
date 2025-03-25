import { motion } from 'framer-motion';
import { Play, Eye } from 'lucide-react';
import { useState } from 'react';
import { Video } from './types';

interface FloatingVideoProps {
  video: Video;
  index: number;
}

export default function FloatingVideo({ video, index }: FloatingVideoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
            <div className="flex items-center text-gray-300">
              <Eye className="w-4 h-4 mr-2" />
              <span>{video.views}</span>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-primary/90 text-white shadow-lg"
          >
            <Play className="w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* Preview on Hover */}
      {isHovered && video.previewUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video.previewUrl} type="video/mp4" />
        </video>
      )}
    </motion.div>
  );
}