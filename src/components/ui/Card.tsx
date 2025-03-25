import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  index?: number;
}

function Card({ className, children, index = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-[#121212] to-[#2C003E]",
        "border border-primary/10 shadow-lg",
        "before:absolute before:inset-0 before:rounded-xl before:border before:border-primary/20 before:opacity-0",
        "hover:before:opacity-100 before:transition-opacity",
        "after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_1px_1px_rgba(106,13,173,0.1)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3 className={cn("text-xl font-bold text-white mb-2", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("text-gray-300", className)}>
      {children}
    </p>
  );
}

export default Card;