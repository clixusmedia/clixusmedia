import { motion, useScroll, useTransform } from 'framer-motion';

function PortfolioBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20" />

      {/* Animated Gradient Orbs */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        {/* Top-left orb */}
        <div className="absolute top-0 -left-48 w-96 h-96 bg-primary/30 rounded-full filter blur-[128px] animate-pulse" />
        
        {/* Center orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full filter blur-[160px] animate-pulse delay-700" />
        
        {/* Bottom-right orb */}
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-primary/30 rounded-full filter blur-[128px] animate-pulse delay-1000" />
      </motion.div>

      {/* Stars/Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.25
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioBackground;