import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Service } from './types';

interface ServiceTierProps {
  title: string;
  subtitle: string;
  services: Service[];
  align: 'left' | 'right';
}

export default function ServiceTier({ title, subtitle, services, align }: ServiceTierProps) {
  return (
    <div className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-${align} max-w-lg mb-12`}
      >
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300">{subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            features={service.features}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}