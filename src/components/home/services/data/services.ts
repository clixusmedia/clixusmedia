import { Video, Palette, Zap, Film, Image, Play, BarChart, Users, Target } from 'lucide-react';
import { Service } from '../types';

export const creatorServices: Service[] = [
  {
    icon: Video,
    title: "Content Editing",
    description: "Professional editing for YouTube, TikTok, and Instagram content.",
    features: [
      "Custom transitions and effects",
      "Engaging pacing and flow",
      "Platform-specific optimization"
    ]
  },
  {
    icon: Palette,
    title: "Visual Enhancement",
    description: "Make your content stand out with professional polish.",
    features: [
      "Color grading",
      "Visual effects",
      "Motion graphics"
    ]
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality.",
    features: [
      "24-hour delivery option",
      "Regular updates",
      "Priority support"
    ]
  }
];

export const brandServices: Service[] = [
  {
    icon: Film,
    title: "Brand Videos",
    description: "Compelling video content that tells your brand story.",
    features: [
      "Brand storytelling",
      "Product showcases",
      "Campaign videos"
    ]
  },
  {
    icon: Image,
    title: "Visual Identity",
    description: "Consistent visual branding across all content.",
    features: [
      "Brand guidelines integration",
      "Custom templates",
      "Style consistency"
    ]
  },
  {
    icon: Play,
    title: "Social Media",
    description: "Engaging content for all social platforms.",
    features: [
      "Platform optimization",
      "Engagement strategies",
      "Content calendars"
    ]
  }
];

export const agencyServices: Service[] = [
  {
    icon: BarChart,
    title: "Scalable Solutions",
    description: "High-volume video editing with consistent quality.",
    features: [
      "Bulk processing",
      "Template systems",
      "Quality control"
    ]
  },
  {
    icon: Users,
    title: "Team Integration",
    description: "Seamless collaboration with your creative team.",
    features: [
      "Project management",
      "Asset organization",
      "Workflow optimization"
    ]
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Tailored services for your agency's needs.",
    features: [
      "Custom workflows",
      "White-label options",
      "Priority support"
    ]
  }
];