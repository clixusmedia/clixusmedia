import { motion } from 'framer-motion';
import { Play, Eye } from 'lucide-react';
import { useState } from 'react';
import { VideoProject } from './types';
import VideoModal from './VideoModal';

interface VideoCardProps {
  video: VideoProject;
  index: number;
}

export default function VideoCard({ video, index }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="relative aspect-video group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Video Preview on Hover */}
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-primary text-sm font-medium mb-2 block">
                {video.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {video.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {video.description}
              </p>
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

          {/* Stats */}
          <div className="absolute top-4 right-4 flex items-center space-x-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="w-4 h-4" />
            <span>{video.views}</span>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal
          video={video}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}