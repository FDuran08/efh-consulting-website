export default function Logo({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { width: 54, height: 30 },
    md: { width: 81, height: 45 },
    lg: { width: 108, height: 60 },
  };

  const { width, height } = sizes[size];

  const t = 8; // bar thickness
  const h = 60; // total height
  const r = 1; // corner radius
  const w = 28; // letter width
  const gap = 6; // gap between letters

  return (
    <svg
      viewBox="0 0 108 60"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        {/* Brushed metal gold gradient - vertical for that polished look */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D48A" />
          <stop offset="15%" stopColor="#D4AF37" />
          <stop offset="40%" stopColor="#C9A227" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#B8962E" />
          <stop offset="100%" stopColor="#A68523" />
        </linearGradient>

        {/* Subtle gold glow */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#glow)">
        {/* E - letter width: 28 */}
        <rect x="0" y="0" width={t} height={h} rx={r} fill="url(#goldGradient)" />
        <rect x="0" y="0" width={w} height={t} rx={r} fill="url(#goldGradient)" />
        <rect x="0" y={(h - t) / 2} width={w - 6} height={t} rx={r} fill="url(#goldGradient)" />
        <rect x="0" y={h - t} width={w + 12} height={t} rx={r} fill="url(#goldGradient)" /> {/* extends under F */}

        {/* F - starts at 34, letter width: 28 */}
        <rect x="34" y="0" width={t} height={h - t - 4} rx={r} fill="url(#goldGradient)" />
        <rect x="34" y="0" width={w + 12} height={t} rx={r} fill="url(#goldGradient)" /> {/* extends over H */}
        <rect x="34" y={(h - t) / 2} width={w - 6} height={t} rx={r} fill="url(#goldGradient)" />

        {/* H - starts at 68, letter width: 32 */}
        <rect x="68" y={t + 4} width={t} height={h - t - 4} rx={r} fill="url(#goldGradient)" />
        <rect x="68" y={(h - t) / 2} width={w + 4} height={t} rx={r} fill="url(#goldGradient)" />
        <rect x="100" y="0" width={t} height={h} rx={r} fill="url(#goldGradient)" />
      </g>
    </svg>
  );
}
