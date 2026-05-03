import { type ReactNode, useState } from 'react';

interface MarqueeTrackProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const MarqueeTrack = ({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
}: MarqueeTrackProps) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`relative overflow-hidden w-full ${className ?? ''}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Left fade mask */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      {/* Right fade mask */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Track — rendered twice for seamless loop */}
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        <div className="flex gap-5 flex-shrink-0">{children}</div>
        <div className="flex gap-5 flex-shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

export default MarqueeTrack;
