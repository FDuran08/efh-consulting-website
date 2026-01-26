'use client';

import { useState, useMemo, FormEvent } from 'react';
import { Button, Input, Select } from './ui';
import { trackConversion } from '@/lib/analytics';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

// Business hours: 9 AM - 5 PM, 30-minute slots
const TIME_SLOTS = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
];

// Generate next 14 days excluding weekends
function getAvailableDates(): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  let current = new Date(today);
  current.setDate(current.getDate() + 1); // Start from tomorrow

  while (dates.length < 14) {
    const day = current.getDay();
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (day !== 0 && day !== 6) {
      dates.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function formatDateISO(date: Date): string {
  // Use local date values to avoid timezone shifting
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function BookingForm() {
  const availableDates = useMemo(() => getAvailableDates(), []);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [step, setStep] = useState<'datetime' | 'details'>('datetime');
  const [confirmedBooking, setConfirmedBooking] = useState<{ date: string; time: string } | null>(null);

  const handleDateSelect = (date: Date) => {
    setFormData(prev => ({ ...prev, date: formatDateISO(date) }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (formData.date && formData.time) {
      setStep('details');
    }
  };

  const handleBack = () => {
    setStep('datetime');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'booking',
        }),
      });

      if (response.ok) {
        // Save booking details before clearing form
        setConfirmedBooking({ date: formData.date, time: formData.time });
        setSubmitStatus('success');
        // Track conversion in analytics
        trackConversion('booking', 0);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookAnother = () => {
    setSubmitStatus('idle');
    setConfirmedBooking(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
    });
    setStep('datetime');
  };

  // Success state
  if (submitStatus === 'success' && confirmedBooking) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Consultation Booked!</h3>
        <p className="text-gray-400 mb-4">
          We&apos;ve sent a confirmation email to your inbox with all the details.
        </p>
        <p className="text-gold font-medium">
          {new Date(confirmedBooking.date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })} at {confirmedBooking.time}
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={handleBookAnother}
        >
          Book Another
        </Button>
      </div>
    );
  }

  // Step 1: Date & Time Selection
  if (step === 'datetime') {
    return (
      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">Select a Date</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {availableDates.map((date) => (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => handleDateSelect(date)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  formData.date === formatDateISO(date)
                    ? 'bg-gold text-black'
                    : 'bg-gray-dark border border-gold/20 text-white hover:border-gold/40'
                }`}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {formData.date && (
          <div>
            <label className="block text-sm font-medium text-white mb-3">Select a Time (PST)</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    formData.time === time
                      ? 'bg-gold text-black'
                      : 'bg-gray-dark border border-gold/20 text-white hover:border-gold/40'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Continue Button */}
        <Button
          type="button"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={!formData.date || !formData.time}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    );
  }

  // Step 2: Contact Details
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Selected DateTime Summary */}
      <div className="flex items-center justify-between p-4 bg-gold/10 border border-gold/20 rounded-lg">
        <div>
          <p className="text-sm text-gray-400">Your appointment</p>
          <p className="text-white font-medium">
            {new Date(formData.date).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })} at {formData.time}
          </p>
        </div>
        <button
          type="button"
          onClick={handleBack}
          className="text-gold text-sm hover:underline"
        >
          Change
        </button>
      </div>

      {/* Contact Form Fields */}
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

      <Input
        id="phone"
        name="phone"
        type="tel"
        label="Phone Number"
        placeholder="(555) 123-4567"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <Select
        id="service"
        name="service"
        label="What service are you interested in?"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Select a service...</option>
        <option value="web-development">Web Development</option>
        <option value="marketing">Marketing Integration</option>
        <option value="bookkeeping">Bookkeeping</option>
        <option value="multiple">Multiple Services</option>
        <option value="not-sure">Not Sure Yet</option>
      </Select>

      {/* Error message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          Something went wrong. Please try again or email us directly at contact@efhconsultinggroup.com
        </div>
      )}

      {/* Submit Button */}
      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Booking...' : 'Confirm Booking'}
        </Button>
      </div>
    </form>
  );
}
