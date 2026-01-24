import Link from 'next/link';
import { Card } from './ui';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags?: string[];
  href?: string;
}

export default function PortfolioCard({ title, category, description, image, tags, href }: PortfolioCardProps) {
  const CardContent = () => (
    <>
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-gray-dark to-black flex items-center justify-center border-b border-gold/10">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gold/20">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-gray-500 bg-black/50 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        <Card variant="bordered" hover className="overflow-hidden">
          <CardContent />
        </Card>
      </Link>
    );
  }

  return (
    <Card variant="bordered" hover className="overflow-hidden group">
      <CardContent />
    </Card>
  );
}
