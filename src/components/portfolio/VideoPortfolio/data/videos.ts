import { VideoProject } from '../types';

export const portfolioVideos: VideoProject[] = [
  {
    id: '1',
    title: 'Mountain Adventure Series',
    category: 'Video Editing',
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=2000',
    previewUrl: 'https://example.com/preview1.mp4',
    videoUrl: 'https://example.com/video1',
    description: 'A breathtaking documentary series showcasing extreme sports and nature.',
    date: 'March 2024',
    views: '2.5M views',
    details: 'A 6-part documentary series following professional athletes as they tackle the world\'s most challenging peaks.'
  },
  {
    id: '2',
    title: 'Tech Product Launch',
    category: 'Brand Campaigns',
    thumbnail: 'https://images.unsplash.com/photo-1682687221038-404670f01d03?auto=format&fit=crop&q=80&w=2000',
    previewUrl: 'https://example.com/preview2.mp4',
    videoUrl: 'https://example.com/video2',
    description: 'Dynamic product reveal video for a cutting-edge tech startup.',
    date: 'February 2024',
    views: '1.8M views',
    details: 'A series of teasers and main reveal video for a revolutionary tech product launch.'
  },
  {
    id: '3',
    title: 'Urban Dance Showcase',
    category: 'Short Form',
    thumbnail: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=2000',
    previewUrl: 'https://example.com/preview3.mp4',
    videoUrl: 'https://example.com/video3',
    description: 'High-energy dance performances in urban settings.',
    date: 'January 2024',
    views: '3.2M views',
    details: 'A collection of short-form dance videos optimized for social media platforms.'
  }
];