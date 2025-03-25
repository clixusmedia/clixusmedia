import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceProps {
  service: {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
}

function ServiceTile({ service, index }: ServiceProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { damping: 25, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        perspective: 2000,
      }}
      className="relative group"
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background-card-from to-background-card-to p-8 h-full border border-white/10">
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Icon */}
            <div className="inline-flex p-3 rounded-xl bg-primary/10">
              <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <motion.h3 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <p className="text-gray-300">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center text-gray-400"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ServiceTile;