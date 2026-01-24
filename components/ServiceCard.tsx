import Link from 'next/link';
import { Card, Button } from './ui';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}

export default function ServiceCard({ icon, title, description, features, href }: ServiceCardProps) {
  return (
    <Card variant="bordered" hover className="p-6 h-full flex flex-col">
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 text-gold">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>

      {/* Features list */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {href && (
        <Link href={href}>
          <Button variant="outline" size="sm" className="w-full">
            Learn More
          </Button>
        </Link>
      )}
    </Card>
  );
}
