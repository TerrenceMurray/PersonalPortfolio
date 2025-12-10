export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12 sm:py-16">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-rich-brown)]/40 to-[var(--color-rich-brown)]"></div>
        <div className="w-2 h-2 bg-[var(--color-rich-brown)] rounded-full"></div>
        <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent via-[var(--color-rich-brown)]/40 to-[var(--color-rich-brown)]"></div>
      </div>
    </div>
  );
}

export function DecorativeAccent({ position = 'left' }: { position?: 'left' | 'right' }) {
  return (
    <div className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} top-0 pointer-events-none opacity-30`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="40" stroke="var[var(--color-rich-brown)]" strokeWidth="0.5" opacity="0.3" />
        <circle cx="60" cy="60" r="55" stroke="var[var(--color-rich-brown)]" strokeWidth="0.5" opacity="0.2" />
        <circle cx="60" cy="60" r="70" stroke="var[var(--color-rich-brown)]" strokeWidth="0.5" opacity="0.1" />
      </svg>
    </div>
  );
}

export function FloatingPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="relative w-24 h-24 sm:w-32 sm:h-32">
        <div className="absolute inset-0 border border-[var(--color-rich-brown)]/10 rounded-xl transform rotate-12"></div>
        <div className="absolute inset-0 border border-[var(--color-rich-brown)]/10 rounded-xl transform -rotate-12"></div>
      </div>
    </div>
  );
}
