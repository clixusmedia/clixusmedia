import { motion } from 'framer-motion';
import ServiceTier from './services/ServiceTier';
import ServicesCTA from './services/ServicesCTA';
import { creatorServices, brandServices, agencyServices } from './services/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 -left-48 w-96 h-96 bg-primary/30 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 -right-48 w-96 h-96 bg-secondary/30 rounded-full filter blur-[128px] animate-pulse delay-1000" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <ServiceTier
            title="For Creators"
            subtitle="Elevate Your Content"
            services={creatorServices}
            align="left"
          />

          <ServiceTier
            title="For Brands"
            subtitle="Build Your Presence"
            services={brandServices}
            align="right"
          />

          <ServiceTier
            title="For Agencies"
            subtitle="Scale Your Production"
            services={agencyServices}
            align="left"
          />

          <ServicesCTA />
        </div>
      </div>
    </section>
  );
}