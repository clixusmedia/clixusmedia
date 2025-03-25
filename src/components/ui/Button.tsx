import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200',
          'shadow-[0_2px_8px_rgba(106,13,173,0.2)]',
          
          // Size variants
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          
          // Width
          {
            'w-full': fullWidth,
          },
          
          // Variant styles
          {
            // Default variant with gradient
            'bg-gradient-to-r from-primary to-[#8A2BE2] text-white hover:from-[#7B1FA2] hover:to-[#9B30FF] active:from-[#6A0DAD] active:to-[#8A2BE2] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]':
              variant === 'default',
            
            // Outline variant
            'border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10':
              variant === 'outline',
            
            // Ghost variant
            'text-primary hover:bg-primary/5 active:bg-primary/10 shadow-none':
              variant === 'ghost',
          },
          
          // Hover effect
          'group overflow-hidden',
          
          className
        )}
        {...props}
      >
        {/* Gradient overlay for hover effect */}
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/[0.1] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Button content */}
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;