import { motion } from 'framer-motion';
import { Video, Palette, Image, Play } from 'lucide-react';
import ServiceTile from './ServiceTile';

const services = [
  {
    icon: <Video className="h-8 w-8" />,
    title: "Professional Video Editing",
    description: "Transform raw footage into compelling stories",
    features: ["Custom transitions", "Color grading", "Sound design"]
  },
  {
    icon: <Play className="h-8 w-8" />,
    title: "Content Enhancement",
    description: "Polish your content to perfection",
    features: ["Engagement optimization", "Pacing refinement", "Quality upscaling"]
  },
  {
    icon: <Image className="h-8 w-8" />,
    title: "YouTube Solutions",
    description: "Optimize for maximum reach",
    features: ["Thumbnail design", "End screens", "Channel branding"]
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Motion Graphics",
    description: "Add professional polish to your videos",
    features: ["Custom animations", "Visual effects", "3D elements"]
  }
];

function ServiceTiles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {services.map((service, index) => (
        <ServiceTile
          key={service.title}
          service={service}
          index={index}
        />
      ))}
    </motion.div>
  );
}

export default ServiceTiles;