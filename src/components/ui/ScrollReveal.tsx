import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

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
      : { opacity: 0, y: 36 };

  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.75, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
