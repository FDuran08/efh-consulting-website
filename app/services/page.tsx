import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@/components/ui';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development, paid ad marketing, and social media management services for businesses. Custom solutions tailored to your needs.',
};

interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: { title: string; description: string }[];
  technologies?: string[];
  platforms?: string[];
}

const services: Service[] = [
  {
    id: 'web-development',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web Development',
    subtitle: 'Custom websites that drive results',
    image: '/images/web-development-efh.png',
    description: 'We create modern, responsive websites that not only look stunning but also convert visitors into customers. From simple business websites to complex web applications, we deliver solutions that work.',
    features: [
      {
        title: 'Custom Design',
        description: 'Unique designs tailored to your brand identity and business goals.',
      },
      {
        title: 'Mobile Responsive',
        description: 'Websites that look and work great on all devices and screen sizes.',
      },
      {
        title: 'SEO Optimized',
        description: 'Built with search engines in mind to help customers find you.',
      },
      {
        title: 'Fast Performance',
        description: 'Optimized for speed to keep visitors engaged and improve rankings.',
      },
      {
        title: 'Content Management',
        description: 'Easy-to-use systems so you can update your own content.',
      },
      {
        title: 'Ongoing Support',
        description: 'We are here to help with updates, maintenance, and improvements.',
      },
    ],
    technologies: ['Next.js', 'React', 'WordPress', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 'paid-ads',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Paid Ad Marketing',
    subtitle: 'Reach your ideal customers with targeted ads',
    image: '/images/service-marketing.png',
    description: 'Drive qualified traffic and generate leads with strategic paid advertising campaigns. We manage your ad spend across Google, Facebook, and Instagram to maximize your return on investment.',
    features: [
      {
        title: 'Google Ads Management',
        description: 'Search, display, and local service ads to capture customers actively looking for you.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Targeted social media campaigns that reach your ideal audience.',
      },
      {
        title: 'Campaign Strategy',
        description: 'Custom ad strategies designed around your business goals and budget.',
      },
      {
        title: 'Performance Tracking',
        description: 'Detailed analytics and reporting on ad performance and ROI.',
      },
      {
        title: 'A/B Testing',
        description: 'Continuous optimization through testing different ad creatives and audiences.',
      },
      {
        title: 'Budget Management',
        description: 'Smart allocation of your ad budget to maximize results.',
      },
    ],
    platforms: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'YouTube Ads'],
  },
  {
    id: 'social-media',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Social Media Management',
    subtitle: 'Build your brand and engage your audience',
    image: '/images/service-social.png',
    description: 'Stay top of mind with consistent, engaging social media content. We handle your social presence so you can focus on running your business while we build your online community.',
    features: [
      {
        title: 'Content Creation',
        description: 'Professional posts, graphics, and videos tailored to your brand.',
      },
      {
        title: 'Posting Schedule',
        description: 'Consistent posting at optimal times for maximum engagement.',
      },
      {
        title: 'Community Management',
        description: 'Respond to comments, messages, and reviews on your behalf.',
      },
      {
        title: 'Brand Voice Development',
        description: 'Create a consistent tone and style across all platforms.',
      },
      {
        title: 'Analytics & Insights',
        description: 'Monthly reports on growth, engagement, and audience demographics.',
      },
      {
        title: 'Platform Strategy',
        description: 'Focus on the platforms where your customers spend their time.',
      },
    ],
    platforms: ['Facebook', 'Instagram', 'Google Business', 'TikTok', 'LinkedIn'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solutions Tailored to Your <span className="text-gold">Business</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From building your online presence to managing your finances, we provide comprehensive services designed to help small businesses thrive.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'bg-gray-dark'} scroll-mt-24`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Service Info */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                {/* Service Image */}
                <div className="relative aspect-video mb-8 rounded-xl overflow-hidden border border-gold/20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 text-gold">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gold text-lg mb-6">{service.subtitle}</p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies/Platforms */}
                {service.technologies && (
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {service.platforms && (
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Platforms We Work With</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform) => (
                        <span key={platform} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link href="/contact">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </div>

              {/* Features Grid */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} variant="bordered" className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-dark to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let&apos;s talk about your business goals. We&apos;ll help you determine the best approach and create a custom solution that fits your needs and budget.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
