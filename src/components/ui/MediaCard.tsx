import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { cn } from '../../utils/cn';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from './Card';

interface MediaCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  className?: string;
  index?: number;
  onClick?: () => void;
}

function MediaCard({ 
  title, 
  description, 
  thumbnail, 
  videoUrl, 
  className,
  index = 0,
  onClick 
}: MediaCardProps) {
  return (
    <Card 
      className={cn("group cursor-pointer", className)} 
      index={index}
      onClick={onClick}
    >
      <CardHeader>
        <div className="relative aspect-video">
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-full bg-primary/90 p-4"
                >
                  <Play className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default MediaCard;