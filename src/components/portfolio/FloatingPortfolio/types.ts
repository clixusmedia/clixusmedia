export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  previewUrl?: string;
  views: string;
  orientation: 'portrait' | 'landscape';
  rotation: number;
  position: string;
}