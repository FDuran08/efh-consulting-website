import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@/components/ui';

const services = [
  {
    image: '/images/web-development-efh.png',
    title: 'Web Development',
    description: 'Custom websites that convert visitors into customers.',
  },
  {
    image: '/images/service-marketing.png',
    title: 'Marketing Integration',
    description: 'Social media and delivery platform setup.',
  },
  {
    image: '/images/bookkeeping-efh.png',
    title: 'Bookkeeping',
    description: 'Keep your finances organized and tax-ready.',
  },
];

const results = [
  { stat: 'Custom', label: 'Website Designs' },
  { stat: '100%', label: 'Mobile Responsive' },
  { stat: '24hr', label: 'Response Time' },
  { stat: 'Local', label: 'Palm Springs Based' },
];

const team = [
  { name: 'Eduardo Molina', role: 'Co-Founder', image: '/images/team-eduardo.png' },
  { name: 'Francisco Duran', role: 'Co-Founder', image: '/images/team-francisco.PNG' },
  { name: 'Henrry Acosta', role: 'Co-Founder', image: '/images/team-henrry.png' },
];

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Most business websites are completed within 2-4 weeks, depending on complexity.',
  },
  {
    question: 'Do you work with businesses outside Palm Springs?',
    answer: 'Yes! While we are based in the Coachella Valley, we work with clients nationwide.',
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'We build your website first and prove our value before asking for long-term commitment.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, all our plans include ongoing maintenance, updates, and support.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/hero-background.png')" }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              Palm Springs &bull; Coachella Valley &bull; Nationwide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Grow your business.<br />
              <span className="text-gold">Get noticed.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Web development, marketing integration, and bookkeeping services for small businesses who are ready to stop being invisible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">Start Your Project</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions Section */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Digital solutions for real businesses
              </h2>
              <p className="text-gray-400 mb-8">
                We help family-owned businesses, restaurants, tradespeople, and startups establish a professional online presence. No corporate jargon, no overcomplication - just real solutions that work.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-gold/10 hover:border-gold/30 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {results.map((item, index) => (
                <div key={index} className="p-6 bg-black rounded-xl border border-gold/10 text-center">
                  <div className="text-3xl font-bold text-gold mb-2">{item.stat}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real results for real businesses
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From restaurants to retail, we help businesses like yours get the exposure they deserve.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-gray-dark to-black rounded-xl border border-gold/10 flex items-center justify-center group hover:border-gold/30 transition-colors">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real results from real business owners
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "They built our website before we even committed. That trust made all the difference.", author: "Restaurant Owner", location: "Palm Springs" },
              { quote: "Finally, a team that understands what small businesses actually need.", author: "Salon Owner", location: "Desert Hot Springs" },
              { quote: "Professional service without the corporate attitude. Highly recommend.", author: "Contractor", location: "Coachella Valley" },
            ].map((testimonial, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <div className="mb-4 text-gold">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Driven by experience, built for you
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three best friends who started a business and learned the hard way that great work means nothing without visibility. Now we help others avoid that struggle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} variant="bordered" className="p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gold">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your questions, answered simply
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start your digital journey today
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Ready to stop being invisible? Let&apos;s build something that gets you noticed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">Get Started</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
