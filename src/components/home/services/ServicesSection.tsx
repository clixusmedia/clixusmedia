import { motion } from 'framer-motion';
import ServiceTier from './ServiceTier';
import ServicesCTA from './ServicesCTA';
import { creatorServices, brandServices, agencyServices } from './data/services';

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20" />
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