import { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';
import { Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Book a Free Consultation',
  description: 'Schedule a free consultation with EFH Consulting Group to discuss your web development, marketing, or bookkeeping needs.',
};

export default function BookingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-black via-gray-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Free Consultation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your <span className="text-gold">Free Consultation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business grow. Pick a time that works for you and we&apos;ll call you.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-3">
              <Card variant="bordered" className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Select a Date & Time</h2>
                <BookingForm />
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Card variant="bordered" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">30 Minutes</h3>
                    <p className="text-gray-400 text-sm">Quick discovery call to understand your needs</p>
                  </div>
                </div>
              </Card>

              <Card variant="bordered" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone or Video</h3>
                    <p className="text-gray-400 text-sm">Your choice - we&apos;ll send meeting details after booking</p>
                  </div>
                </div>
              </Card>

              <Card variant="bordered" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">No Obligation</h3>
                    <p className="text-gray-400 text-sm">Get honest advice with zero pressure to buy</p>
                  </div>
                </div>
              </Card>

              <Card variant="bordered" className="p-6">
                <h3 className="text-white font-semibold mb-3">What We&apos;ll Cover</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your business goals and challenges
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    How we can help solve them
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pricing and timeline estimates
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Next steps if we&apos;re a good fit
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
