'use client';

import { useState, FormEvent } from 'react';
import { Button, Input, Textarea, Select } from './ui';
import { trackConversion } from '@/lib/analytics';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Track conversion in analytics
        trackConversion('contact_form', 0);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          type="text"
          label="Full Name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          id="company"
          name="company"
          type="text"
          label="Company Name"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <Select
        id="service"
        name="service"
        label="Service Interest"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Select a service...</option>
        <option value="web-development">Web Development</option>
        <option value="paid-ads">Paid Ad Marketing</option>
        <option value="social-media">Social Media Management</option>
        <option value="multiple">Multiple Services</option>
        <option value="other">Other</option>
      </Select>

      <Textarea
        id="message"
        name="message"
        label="Your Message"
        placeholder="Tell us about your project or how we can help..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Status messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
          Thank you for your message! We&apos;ll get back to you within 24 hours.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          Something went wrong. Please try again or email us directly at contact@efhconsultinggroup.com
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
