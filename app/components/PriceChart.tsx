'use client';

export function PriceChart() {
  return (
    <div className="relative h-80 w-full">
      <svg className="w-full h-full" viewBox="0 0 800 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(0, 82, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        <line x1="0" y1="80" x2="800" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="0" y1="160" x2="800" y2="160" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="0" y1="240" x2="800" y2="240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        
        {/* Chart path */}
        <path
          d="M 0 280 L 100 240 L 200 200 L 300 180 L 400 160 L 500 140 L 600 120 L 700 100 L 800 80"
          fill="url(#chartGradient)"
          stroke="rgba(0, 212, 255, 0.8)"
          strokeWidth="2"
        />
        
        {/* Signal markers */}
        <circle cx="200" cy="200" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
        <circle cx="500" cy="140" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
        <circle cx="700" cy="100" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
      </svg>
      
      {/* Time labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-fg/60">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}
