import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with EFH Consulting Group for web development, paid ad marketing, and social media management services.',
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    value: 'contact@efhconsultinggroup.com',
    href: 'mailto:contact@efhconsultinggroup.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Service Area',
    value: 'Palm Springs / Desert Hot Springs, CA',
    subtitle: 'Serving clients locally and nationwide',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Response Time',
    value: 'Within 24 Hours',
    subtitle: 'We aim to respond to all inquiries promptly',
  },
];

const services = [
  'Web Development',
  'Paid Ad Marketing',
  'Social Media Management',
  'Google Ads Campaigns',
  'Facebook & Instagram Ads',
  'Content Creation',
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Start Your <span className="text-gold">Journey</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ready to take your business to the next level? Fill out the form below and we&apos;ll get back to you within 24 hours to discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="bordered" className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card key={index} variant="bordered" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gold hover:text-gold-dark transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                      {info.subtitle && (
                        <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Services List */}
              <Card variant="bordered" className="p-6">
                <h3 className="text-white font-semibold mb-4">Services We Offer</h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How long does it take to build a website?',
                answer: 'Most business websites can be completed within 2-4 weeks, depending on complexity. We\'ll provide a specific timeline during our initial consultation.',
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes! We offer ongoing maintenance and support packages to keep your website running smoothly and your finances organized.',
              },
              {
                question: 'What areas do you serve?',
                answer: 'While we\'re based in the Palm Springs area, we work with clients throughout California and nationwide. Most of our services can be delivered remotely.',
              },
              {
                question: 'How much do your services cost?',
                answer: 'Our pricing varies based on your specific needs. We offer free consultations to discuss your project and provide a detailed quote.',
              },
              {
                question: 'Can you help with existing websites?',
                answer: 'We can help with website updates, redesigns, migrations, and improvements to existing sites.',
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

      {/* Map/Location Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Proudly Serving the Coachella Valley
              </h2>
              <p className="text-gray-400 mb-6">
                Located in the beautiful desert region of Southern California, we&apos;re proud to serve businesses in Palm Springs, Desert Hot Springs, Cathedral City, Rancho Mirage, Palm Desert, and surrounding areas.
              </p>
              <p className="text-gray-400">
                Don&apos;t worry if you&apos;re not local &mdash; we work with clients across the country through video calls, email, and phone. Distance is no barrier to great service.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-dark to-black rounded-xl flex items-center justify-center border border-gold/10">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold">Palm Springs Area</p>
                <p className="text-gray-500 text-sm">California, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
