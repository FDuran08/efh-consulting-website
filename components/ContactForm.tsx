'use client';

import { useState, FormEvent } from 'react';
import { Button, Input, Textarea, Select } from './ui';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
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
        setFormData({
          name: '',
          email: '',
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
          id="company"
          name="company"
          type="text"
          label="Company Name"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
        />
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
          <option value="marketing">Marketing Integration</option>
          <option value="bookkeeping">Bookkeeping</option>
          <option value="multiple">Multiple Services</option>
          <option value="other">Other</option>
        </Select>
      </div>

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
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
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
