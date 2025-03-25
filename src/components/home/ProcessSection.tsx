import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Film, Send } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Consultation',
    description: 'We discuss your vision and requirements'
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Planning',
    description: 'Detailed project planning and creative direction'
  },
  {
    icon: <Film className="h-8 w-8" />,
    title: 'Production',
    description: 'Expert editing and visual enhancement'
  },
  {
    icon: <Send className="h-8 w-8" />,
    title: 'Delivery',
    description: 'Final review and project delivery'
  }
];

function ProcessSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A streamlined approach to bringing your vision to life
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 relative z-10">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;