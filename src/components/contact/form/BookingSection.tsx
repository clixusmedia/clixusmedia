import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';
import Button from '../../ui/Button';

function BookingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Book a Free Consultation</h3>
        <p className="text-gray-300">
          Schedule a 30-minute call with our video editing experts to discuss your project
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4 text-gray-300">
          <Calendar className="h-5 w-5 text-primary" />
          <span>Available Monday to Friday</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-300">
          <Clock className="h-5 w-5 text-primary" />
          <span>30 Minutes Session</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-300">
          <Video className="h-5 w-5 text-primary" />
          <span>Video Call via Zoom</span>
        </div>

        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary group"
          >
            Schedule a Call
            <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

export default BookingSection;