import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development, marketing integration, and bookkeeping services for businesses. Custom solutions tailored to your needs.',
};

const services = [
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
    id: 'marketing',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Marketing Integration',
    subtitle: 'Connect with your customers everywhere',
    image: '/images/service-marketing.png',
    description: 'Expand your reach and streamline your marketing efforts. We help you establish a strong presence on social media and food delivery platforms, ensuring consistent branding across all channels.',
    features: [
      {
        title: 'Social Media Setup',
        description: 'Professional profiles on Facebook, Instagram, Google Business, and more.',
      },
      {
        title: 'Food Delivery Integration',
        description: 'Get your business on DoorDash, UberEats, Grubhub, and other platforms.',
      },
      {
        title: 'Brand Consistency',
        description: 'Unified messaging and visuals across all your marketing channels.',
      },
      {
        title: 'Analytics & Tracking',
        description: 'Understand your audience with detailed insights and reporting.',
      },
      {
        title: 'Content Strategy',
        description: 'Guidance on what to post and when to maximize engagement.',
      },
      {
        title: 'Platform Training',
        description: 'Learn how to manage your profiles and make the most of each platform.',
      },
    ],
    platforms: ['Facebook', 'Instagram', 'Google Business', 'DoorDash', 'UberEats', 'Grubhub', 'Yelp'],
  },
  {
    id: 'bookkeeping',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Bookkeeping Services',
    subtitle: 'Keep your finances in order',
    image: '/images/bookkeeping-efh.png',
    description: 'Focus on running your business while we handle the numbers. Our bookkeeping services help you stay organized, compliant, and informed about your financial health.',
    features: [
      {
        title: 'Monthly Reconciliation',
        description: 'Regular reconciliation of accounts to ensure accuracy.',
      },
      {
        title: 'Financial Reports',
        description: 'Clear, easy-to-understand reports on your business performance.',
      },
      {
        title: 'Tax Preparation Support',
        description: 'Organized records and documentation ready for tax season.',
      },
      {
        title: 'Expense Tracking',
        description: 'Categorized expenses to understand where your money goes.',
      },
      {
        title: 'Invoice Management',
        description: 'Track receivables and ensure you get paid on time.',
      },
      {
        title: 'Financial Insights',
        description: 'Actionable recommendations to improve your bottom line.',
      },
    ],
    tools: ['QuickBooks', 'Xero', 'FreshBooks', 'Wave'],
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

                {/* Technologies/Platforms/Tools */}
                {'technologies' in service && service.technologies && (
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-2">
                      {(service.technologies as string[]).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {'platforms' in service && service.platforms && (
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Platforms We Work With</h4>
                    <div className="flex flex-wrap gap-2">
                      {(service.platforms as string[]).map((platform) => (
                        <span key={platform} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {'tools' in service && service.tools && (
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Tools We Support</h4>
                    <div className="flex flex-wrap gap-2">
                      {(service.tools as string[]).map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">
                          {tool}
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
