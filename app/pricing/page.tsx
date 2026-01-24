import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for web development, marketing integration, and bookkeeping services. No hidden fees.',
};

const pricingTiers = [
  {
    name: 'Website',
    price: '$500',
    period: 'one-time',
    description: 'Your custom website, built and ready to launch.',
    features: [
      'Custom designed website',
      'Mobile responsive',
      'SEO optimized',
      'Contact form included',
      'Up to 5 pages',
      'Content management system',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$50',
    period: '/month',
    description: 'First 3 months while we prove our value to you.',
    features: [
      'Website hosting & maintenance',
      'Security updates',
      'Monthly backups',
      'Basic support',
      'Minor content updates',
      'Performance monitoring',
    ],
    highlight: true,
    badge: 'Start Here',
    cta: 'Start Trial',
  },
  {
    name: 'Partner',
    price: '$150',
    period: '/month',
    description: 'After we\'ve proven results, ongoing partnership.',
    features: [
      'Everything in Growth',
      'Priority support',
      'Monthly strategy call',
      'Social media management',
      'Analytics reporting',
      'Unlimited content updates',
    ],
    highlight: false,
    cta: 'Learn More',
  },
];

const addOns = [
  { name: 'E-commerce Setup', price: '$300+', description: 'Online store with payment processing' },
  { name: 'Food Delivery Integration', price: '$200', description: 'DoorDash, UberEats, Grubhub setup' },
  { name: 'Social Media Setup', price: '$150', description: 'All major platforms configured' },
  { name: 'Bookkeeping', price: '$200/mo', description: 'Monthly financial management' },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Plans built for <span className="text-gold">small business</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            No hidden fees. No long-term contracts. We prove our value first, then you decide if we&apos;re worth it.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                variant="bordered"
                className={`p-8 relative ${tier.highlight ? 'border-gold ring-1 ring-gold' : ''}`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-black text-sm font-semibold rounded-full">
                    {tier.badge}
                  </span>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gold">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button
                    variant={tier.highlight ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proof our approach delivers results
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We don&apos;t ask for your trust - we earn it. Here&apos;s how:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'We build first',
                description: 'We create your website before you pay anything significant. You see the real product, not mockups.',
              },
              {
                step: '02',
                title: 'You pay $500',
                description: 'Happy with what you see? Pay $500 for your completed, custom website. That\'s it for upfront costs.',
              },
              {
                step: '03',
                title: '3 months at $50',
                description: 'We manage everything for $50/month. This is our chance to prove we deliver ongoing value.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-gold/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-black/50 rounded-xl border border-gold/20 max-w-2xl mx-auto text-center">
            <p className="text-white mb-2">After 3 months, if we&apos;ve shown real value:</p>
            <p className="text-2xl font-bold text-gold">$150/month ongoing partnership</p>
            <p className="text-gray-400 text-sm mt-2">No contracts. Cancel anytime. We only win if you win.</p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Add-Ons
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <h3 className="text-white font-semibold mb-1">{addon.name}</h3>
                <p className="text-gold font-bold mb-2">{addon.price}</p>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing FAQs, made simple
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: 'Why do you build the website first?',
                answer: 'Because we know trust has to be earned. We\'re a new company, and we\'d rather show you what we can do than make promises. When you see the finished product, you can make an informed decision.',
              },
              {
                question: 'What if I don\'t like the website you build?',
                answer: 'We work with you throughout the process to make sure you\'re happy. If the final product isn\'t what you wanted, we\'ll make revisions until it is - or you walk away with no obligation.',
              },
              {
                question: 'Why is the first 3 months cheaper?',
                answer: 'We need to prove ourselves. The $50/month period is our audition. If we can\'t deliver value in that time, we don\'t deserve your $150/month.',
              },
              {
                question: 'Are there any contracts or commitments?',
                answer: 'No long-term contracts. After the initial 3 months, you can cancel anytime. We believe if we\'re doing our job, you\'ll want to stay.',
              },
              {
                question: 'What\'s included in the monthly fee?',
                answer: 'Hosting, maintenance, security updates, backups, and support. At the $150 level, you also get monthly strategy calls, social media help, and unlimited content updates.',
              },
            ].map((faq, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s connect and grow your business
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Ready to see what we can build for you? No pressure, no hard sell - just a conversation about your business.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
