import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  from = 0,
  to,
  suffix = '',
  duration = 1.2,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, motionValue, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
