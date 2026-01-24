import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const inputBaseStyles = 'w-full px-4 py-3 bg-gray-dark border border-gold/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200';

const labelStyles = 'block text-sm font-medium text-white mb-2';

const errorStyles = 'mt-1 text-sm text-red-400';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className={labelStyles}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`${inputBaseStyles} ${error ? 'border-red-400' : ''} ${className}`}
          {...props}
        />
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className={labelStyles}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={`${inputBaseStyles} min-h-[120px] resize-y ${error ? 'border-red-400' : ''} ${className}`}
          {...props}
        />
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export const Select = forwardRef<HTMLSelectElement, InputHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string; children: React.ReactNode }>(
  ({ className = '', label, error, id, children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className={labelStyles}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={`${inputBaseStyles} cursor-pointer ${error ? 'border-red-400' : ''} ${className}`}
          {...props}
        >
          {children}
        </select>
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
