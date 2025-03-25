import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../ui/Button';
import HeroBackground from './hero/HeroBackground';

function HeroSection() {
  const [text] = useTypewriter({
    words: ['STUNNING', 'ENGAGING', 'VIRAL'],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <motion.div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm text-white">🎥 #1 Content & Growth Agency </span>
            </motion.div>

            <motion.h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              We Make Your Content
              <span className="block mt-2 bg-gradient-to-r from-primary via-[#9C27B0] to-secondary bg-clip-text text-transparent">
                {text}
                <Cursor cursorColor="#8E24AA" />
              </span>
            </motion.h1>

            <motion.p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Transform your raw footage into captivating content that engages your audience and drives results.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-primary to-secondary"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
                className="group"
              >
                View Our Work
                <Play className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Video Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source src="https://player.vimeo.com/external/449623642.sd.mp4?s=8d2de247a9f93e938d3f4b2e8f3c3e4f7c9f9b0f&profile_id=164" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;