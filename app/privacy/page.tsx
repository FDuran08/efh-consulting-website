import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for EFH Consulting Group.',
};

export default function PrivacyPage() {
  return (
    <section className="py-32 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-gold max-w-none space-y-6 text-gray-400">
          <p className="text-lg">
            Last updated: January 2025
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out our contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and business information.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, communicate with you about projects and inquiries, and send you updates about our services (with your consent).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, provided they agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@efhconsultinggroup.com" className="text-gold hover:underline">
              contact@efhconsultinggroup.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
