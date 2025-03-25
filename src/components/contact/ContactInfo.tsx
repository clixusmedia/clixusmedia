import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    subDetails: 'Mon-Fri from 8am to 6pm',
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: 'Email',
    details: 'info@clixusmedia.com',
    subDetails: 'We reply within 24 hours',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Location',
    details: 'Los Angeles, CA',
    subDetails: 'Creative District, 90012',
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Business Hours',
    details: 'Mon - Fri: 8am - 6pm',
    subDetails: 'Weekend: By appointment',
  },
];

function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {contactInfo.map((info, index) => (
        <Card key={info.title} index={index}>
          <CardContent className="text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              {info.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
            <p className="text-gray-300 mb-1">{info.details}</p>
            <p className="text-gray-400 text-sm">{info.subDetails}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ContactInfo;