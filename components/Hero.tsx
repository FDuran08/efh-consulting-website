import Link from 'next/link';
import { Button } from './ui';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  centered?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  centered = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-dark to-black" />

      {/* Gold accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${centered ? 'text-center' : ''}`}>
        {/* Subtitle badge */}
        <div className="inline-block mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
            {subtitle}
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {word.toLowerCase() === 'business' || word.toLowerCase() === 'success' || word.toLowerCase() === 'growth' ? (
                <span className="text-gold">{word}</span>
              ) : (
                word
              )}{' '}
            </span>
          ))}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
          {primaryCta && (
            <Link href={primaryCta.href}>
              <Button variant="primary" size="lg">
                {primaryCta.text}
              </Button>
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button variant="outline" size="lg">
                {secondaryCta.text}
              </Button>
            </Link>
          )}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Professional Service</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Local & Nationwide</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Results-Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}
