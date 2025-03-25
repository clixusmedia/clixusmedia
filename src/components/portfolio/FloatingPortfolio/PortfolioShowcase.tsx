import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioVideos } from './data';
import FloatingVideo from './FloatingVideo';
import PortfolioModal from './PortfolioModal';
import { Video } from './types';

export default function PortfolioShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {portfolioVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedVideo(video)}
          >
            <FloatingVideo video={video} index={index} />
          </motion.div>
        ))}
      </div>

      {selectedVideo && (
        <PortfolioModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}