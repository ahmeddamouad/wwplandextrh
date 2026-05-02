import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.34, 1.56, 0.64, 1],
};

const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const initial =
    direction === 'left'
      ? { opacity: 0, x: -40 }
      : direction === 'right'
      ? { opacity: 0, x: 40 }
      : { opacity: 0, y: 40 };

  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ ease: EASING.bounce, duration: 0.8, delay }}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
