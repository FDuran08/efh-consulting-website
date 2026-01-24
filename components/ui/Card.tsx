import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', hover = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl overflow-hidden';

    const variants = {
      default: 'bg-gray-dark',
      elevated: 'bg-gray-dark shadow-lg shadow-black/20',
      bordered: 'bg-gray-dark border border-gold/20',
    };

    const hoverStyles = hover
      ? 'transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1'
      : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
