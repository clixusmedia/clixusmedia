import { useState, useMemo } from 'react';
import { portfolioVideos } from '../data/videos';

export function useVideoPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioVideos;
    }
    return portfolioVideos.filter(video => video.category === selectedCategory);
  }, [selectedCategory]);

  return {
    videos: portfolioVideos,
    selectedCategory,
    setSelectedCategory,
    filteredVideos
  };
}