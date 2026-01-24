import { Metadata } from 'next';
import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View our portfolio of web development, marketing integration, and bookkeeping projects for businesses.',
};

const projects = [
  {
    title: 'Restaurant Website & Ordering',
    category: 'Web Development',
    description: 'A modern website with online ordering integration for a local Palm Springs restaurant, increasing their online orders significantly.',
    tags: ['Next.js', 'Online Ordering', 'Responsive Design'],
  },
  {
    title: 'Multi-Platform Marketing Setup',
    category: 'Marketing Integration',
    description: 'Complete social media presence and food delivery platform integration for a Desert Hot Springs eatery.',
    tags: ['DoorDash', 'UberEats', 'Instagram', 'Google Business'],
  },
  {
    title: 'Small Business Bookkeeping',
    category: 'Bookkeeping',
    description: 'Streamlined financial management and reporting system for a local retail store, improving their visibility into cash flow.',
    tags: ['QuickBooks', 'Monthly Reports', 'Tax Prep'],
  },
  {
    title: 'Professional Services Website',
    category: 'Web Development',
    description: 'Clean, professional website for a local consulting firm, complete with contact forms and service showcases.',
    tags: ['WordPress', 'SEO', 'Lead Generation'],
  },
  {
    title: 'Social Media Brand Refresh',
    category: 'Marketing Integration',
    description: 'Complete rebranding of social media profiles with consistent visuals and messaging across all platforms.',
    tags: ['Facebook', 'Instagram', 'Brand Identity'],
  },
  {
    title: 'E-commerce Store Setup',
    category: 'Web Development',
    description: 'Full e-commerce solution for a local boutique, enabling them to sell products online and expand their reach.',
    tags: ['Shopify', 'Payment Integration', 'Inventory'],
  },
];

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Custom Web Development',
    items: ['Business Websites', 'E-commerce Stores', 'Web Applications', 'Landing Pages'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Marketing Solutions',
    items: ['Social Media Setup', 'Delivery Platforms', 'Google Business', 'Brand Strategy'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Financial Services',
    items: ['Bookkeeping', 'Financial Reports', 'Tax Preparation', 'Cash Flow Analysis'],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See What&apos;s <span className="text-gold">Possible</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore examples of the work we do for businesses like yours. From websites to marketing campaigns to organized finances, we deliver results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Do Section */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Can Do For You
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our comprehensive services cover everything you need to establish, grow, and manage your business effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 bg-black/50 rounded-xl border border-gold/10">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 text-gold">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and challenges to understand exactly what you need.' },
              { step: '02', title: 'Planning', description: 'We create a detailed plan with clear deliverables, timelines, and expectations.' },
              { step: '03', title: 'Execution', description: 'Our team gets to work, keeping you informed and involved throughout the process.' },
              { step: '04', title: 'Support', description: 'We don\'t disappear after delivery. We\'re here for ongoing support and improvements.' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gold/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-dark to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let&apos;s discuss your ideas and create something amazing together. Your success story could be our next portfolio piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
