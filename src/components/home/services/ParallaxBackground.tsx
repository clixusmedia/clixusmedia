import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

      {/* Animated shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20" />
    </div>
  );
}

export default ParallaxBackground;