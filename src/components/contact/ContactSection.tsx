import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import BookingSection from './form/BookingSection';

function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="mb-20">
          <ContactInfo />
        </div>

        {/* Contact Form and Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-gray-300 mb-6">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>
            <ContactForm />
          </div>

          {/* Booking Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Book a Consultation</h3>
              <p className="text-gray-300 mb-6">
                Schedule a free consultation call with our video editing experts
              </p>
            </motion.div>
            <BookingSection />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;