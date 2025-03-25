import { SelectHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ContactSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
}

function ContactSelect({ label, options, error, ...props }: ContactSelectProps) {
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
        <select
          {...props}
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl text-white
            backdrop-blur-lg appearance-none transition-all duration-200
            ${error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'}
            focus:outline-none focus:ring-2 focus:ring-primary/50
          `}
        >
          <option value="" className="bg-background">Select a service</option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-background">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5" />
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

export default ContactSelect;