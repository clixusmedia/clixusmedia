import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from '../ui/Button';
import ContactInput from './form/ContactInput';
import ContactSelect from './form/ContactSelect';
import ContactTextarea from './form/ContactTextarea';
import useContactForm, { ContactFormData } from '../../hooks/useContactForm';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Short-form Video Editing',
    'Long-form Video Editing',
    'Thumbnail Creation',
    'Graphics & Animations',
    'Custom Project',
  ];

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { formData, errors, handleChange, handleSubmit } = useContactForm(handleFormSubmit);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <ContactInput
          label="Full Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          error={errors.name}
        />

        <ContactInput
          label="Email Address"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          error={errors.email}
        />

        <ContactSelect
          label="Service Interested In"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          options={services}
          required
          error={errors.subject}
        />

        <ContactTextarea
          label="Project Details"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          required
          error={errors.message}
        />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Button 
              type="submit" 
              size="lg"
              fullWidth 
              disabled={isSubmitting}
              className={`
                group transition-all duration-300
                ${submitSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-primary to-secondary'}
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : submitSuccess ? (
                <span className="flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                </span>
              )}
            </Button>
          </motion.div>
        </AnimatePresence>
      </form>
    </motion.div>
  );
}

export default ContactForm;