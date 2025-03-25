import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import { VideoProject } from './types';

interface VideoGridProps {
  videos: VideoProject[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {videos.map((video, index) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          index={index} 
        />
      ))}
    </motion.div>
  );
}