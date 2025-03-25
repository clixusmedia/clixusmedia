import { Film, Palette, Image, Play } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Service } from '../home/services/types';

const services: Service[] = [
  {
    icon: Film,
    title: "Professional Video Editing",
    description: "Transform raw footage into compelling stories with our expert editing services.",
    features: [
      "Custom transitions and effects",
      "Color grading and correction",
      "Sound design and mixing",
      "Motion graphics integration"
    ]
  },
  {
    icon: Play,
    title: "Short-form Content",
    description: "Create engaging content optimized for social media and short attention spans.",
    features: [
      "Platform-specific formatting",
      "Trend-aware editing",
      "Engagement optimization",
      "Quick turnaround time"
    ]
  },
  {
    icon: Image,
    title: "Thumbnail Design",
    description: "Stand out with eye-catching thumbnails that drive clicks and engagement.",
    features: [
      "Custom thumbnail creation",
      "A/B testing options",
      "Brand consistency",
      "Platform optimization"
    ]
  },
  {
    icon: Palette,
    title: "Motion Graphics",
    description: "Add professional polish with custom animations and visual effects.",
    features: [
      "2D/3D animations",
      "Logo animations",
      "Infographic creation",
      "Visual effects (VFX)"
    ]
  }
];

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          {...service}
          index={index}
        />
      ))}
    </div>
  );
}

export default ServicesGrid;