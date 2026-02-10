import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for EFH Consulting Group.',
};

export default function TermsPage() {
  return (
    <section className="py-32 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert prose-gold max-w-none space-y-6 text-gray-400">
          <p className="text-lg">
            Last updated: January 2025
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">1. Agreement to Terms</h2>
          <p>
            By accessing or using EFH Consulting Group&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Services</h2>
          <p>
            EFH Consulting Group provides web development, paid ad marketing, and social media management services. The specific scope of services will be outlined in individual project agreements.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Payment Terms</h2>
          <p>
            Our standard pricing includes an initial website development fee followed by monthly maintenance fees. Specific payment terms will be outlined in your service agreement.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Intellectual Property</h2>
          <p>
            Upon full payment, clients receive ownership of custom website designs and content created specifically for their project. EFH Consulting Group retains the right to showcase completed work in our portfolio.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Limitation of Liability</h2>
          <p>
            EFH Consulting Group shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Contact</h2>
          <p>
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:contact@efhconsultinggroup.com" className="text-gold hover:underline">
              contact@efhconsultinggroup.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
