import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for web development, paid ad marketing, and social media management services. No hidden fees.',
};

const servicePricing = [
  {
    name: 'Website Development',
    description: 'Custom websites that convert visitors into customers.',
    tiers: [
      { name: 'Basic', price: '$1,500', features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO'] },
      { name: 'Standard', price: '$3,000', features: ['Up to 10 pages', 'Blog/News section', 'Advanced SEO', 'Analytics setup'] },
      { name: 'Premium', price: '$5,000', features: ['Unlimited pages', 'E-commerce ready', 'Custom features', 'Priority support'] },
    ],
  },
  {
    name: 'Website Maintenance',
    description: 'Keep your website secure, updated, and running smoothly.',
    tiers: [
      { name: 'Basic', price: '$100/mo', features: ['Hosting included', 'Security updates', 'Monthly backups', 'Email support'] },
      { name: 'Standard', price: '$250/mo', features: ['Everything in Basic', 'Content updates', 'Performance monitoring', 'Priority support'] },
      { name: 'Premium', price: '$400/mo', features: ['Everything in Standard', 'Monthly strategy call', 'Unlimited updates', 'Same-day response'] },
    ],
  },
  {
    name: 'Paid Ad Marketing',
    description: 'Drive qualified traffic with Google, Facebook & Instagram ads.',
    tiers: [
      { name: 'Starter', price: '$200/mo', features: ['1 platform', 'Basic targeting', 'Monthly reporting', 'Ad creation'] },
      { name: 'Growth', price: '$750/mo', features: ['2 platforms', 'Advanced targeting', 'Bi-weekly reporting', 'A/B testing'] },
      { name: 'Scale', price: '$1,500/mo', features: ['All platforms', 'Full optimization', 'Weekly reporting', 'Dedicated manager'] },
    ],
  },
  {
    name: 'Social Media Management',
    description: 'Build your brand with consistent, engaging content.',
    tiers: [
      { name: 'Starter', price: '$200/mo', features: ['2 platforms', '8 posts/month', 'Basic graphics', 'Monthly analytics'] },
      { name: 'Growth', price: '$600/mo', features: ['3 platforms', '16 posts/month', 'Custom graphics', 'Community management'] },
      { name: 'Scale', price: '$1,200/mo', features: ['All platforms', '30+ posts/month', 'Video content', 'Brand strategy'] },
    ],
  },
];

const addOns = [
  { name: 'E-commerce Setup', price: '$500+', description: 'Online store with payment processing' },
  { name: 'Logo & Branding', price: '$300+', description: 'Professional logo and brand identity' },
  { name: 'Photography', price: '$250+', description: 'Professional product or business photos' },
  { name: 'Video Production', price: '$500+', description: 'Promotional videos for ads and social' },
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

      {/* Service Pricing */}
      {servicePricing.map((service, serviceIndex) => (
        <section key={serviceIndex} className={`py-16 ${serviceIndex % 2 === 0 ? 'bg-black' : 'bg-gray-dark'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.name}</h2>
              <p className="text-gray-400">{service.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.tiers.map((tier, tierIndex) => (
                <Card
                  key={tierIndex}
                  variant="bordered"
                  className={`p-6 ${tierIndex === 1 ? 'border-gold ring-1 ring-gold relative' : ''}`}
                >
                  {tierIndex === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-black text-sm font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-gold">{tier.price}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block">
                    <Button
                      variant={tierIndex === 1 ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, transparent process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No hidden fees, no surprises. Here&apos;s how we work:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'We discuss your business goals and recommend the right services for your needs and budget.',
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description: 'You receive a detailed proposal with clear pricing and deliverables. No surprises.',
              },
              {
                step: '03',
                title: 'We Deliver Results',
                description: 'We execute the plan and provide ongoing support. You see real, measurable growth.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-gold/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gray-dark rounded-xl border border-gold/20 max-w-2xl mx-auto text-center">
            <p className="text-white mb-2">Bundle and save!</p>
            <p className="text-2xl font-bold text-gold">Website + Marketing = 10% Off</p>
            <p className="text-gray-400 text-sm mt-2">Combine website development with any marketing service for a discount.</p>
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
                question: 'What determines the website price tier?',
                answer: 'The tier depends on the number of pages, features needed (like e-commerce or booking), and level of customization. We\'ll recommend the right tier during your free consultation.',
              },
              {
                question: 'Is ad spend included in marketing prices?',
                answer: 'No, our prices cover management and optimization. Ad spend is separate and goes directly to the platforms (Google, Facebook, etc.). We recommend minimum ad budgets based on your goals.',
              },
              {
                question: 'Can I change my plan later?',
                answer: 'Absolutely! You can upgrade, downgrade, or switch services at any time. We want to make sure you\'re getting the right level of support for your business.',
              },
              {
                question: 'Are there any contracts or commitments?',
                answer: 'No long-term contracts required. Monthly services are billed monthly. You can cancel anytime with 30 days notice.',
              },
              {
                question: 'Do you offer custom packages?',
                answer: 'Yes! If the standard tiers don\'t fit your needs, we can create a custom package. Contact us to discuss your specific requirements.',
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
