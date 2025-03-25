import { TextareaHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ContactTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function ContactTextarea({ label, error, ...props }: ContactTextareaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <textarea
          {...props}
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400
            backdrop-blur-lg transition-all duration-200 min-h-[120px] resize-y
            ${error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'}
            focus:outline-none focus:ring-2 focus:ring-primary/50
          `}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export default ContactTextarea;