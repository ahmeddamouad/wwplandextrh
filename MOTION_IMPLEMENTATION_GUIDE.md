# Motion Design Implementation Guide

## Quick Start: Essential Animations to Implement First

This guide provides practical, copy-paste ready code for implementing the motion design patterns.

---

## 1. Create Custom Hooks

### 1.1 useIntersectionObserver Hook

**File**: `src/hooks/useIntersectionObserver.ts`

```typescript
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce !== false) {
          setHasTriggered(true);
        }
        if (options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible, hasTriggered };
};
```

**Usage**:
```tsx
const { ref, isVisible } = useIntersectionObserver();

return (
  <div ref={ref} className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
    Content appears on scroll
  </div>
);
```

---

### 1.2 useAnimatedCounter Hook

**File**: `src/hooks/useAnimatedCounter.ts`

```typescript
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export const useAnimatedCounter = (
  end: number,
  duration: number = 2,
  shouldAnimate: boolean = true
) => {
  const [count, setCount] = useState(0);
  const { isVisible } = useIntersectionObserver({ triggerOnce: true });

  useEffect(() => {
    if (!shouldAnimate || !isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(end * progress);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isVisible, shouldAnimate]);

  return count;
};
```

**Usage**:
```tsx
const studentCount = useAnimatedCounter(500, 2);
return <span>{studentCount}+</span>;
```

---

## 2. Update CSS Animations

### 2.1 Add to `src/index.css`

```css
/* Enhanced Entrance Animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover/Focus Effects */
@keyframes pulseRing {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(31, 168, 154, 0.7);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(31, 168, 154, 0);
  }
}

@keyframes glow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(31, 168, 154, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(31, 168, 154, 0.8));
  }
}

@keyframes cardHoverGlow {
  from {
    box-shadow: 0 4px 20px -4px rgba(31, 168, 154, 0.1);
  }
  to {
    box-shadow: 0 20px 40px -8px rgba(31, 168, 154, 0.2);
  }
}

/* Utility Classes */
.animate-slide-in-left {
  animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-slide-in-down {
  animation: slideInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-pulse-ring {
  animation: pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Hover Card Effect */
.card-hover-effect {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-hover-effect:hover {
  transform: translateY(-12px);
  animation: cardHoverGlow 0.3s ease-out forwards;
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 3. Update Tailwind Config

### 3.1 Extend `tailwind.config.ts`

```typescript
// In the extend keyframes section:
keyframes: {
  slideInLeft: {
    from: { opacity: "0", transform: "translateX(-30px)" },
    to: { opacity: "1", transform: "translateX(0)" },
  },
  slideInRight: {
    from: { opacity: "0", transform: "translateX(30px)" },
    to: { opacity: "1", transform: "translateX(0)" },
  },
  slideInDown: {
    from: { opacity: "0", transform: "translateY(-30px)" },
    to: { opacity: "1", transform: "translateY(0)" },
  },
  pulseRing: {
    "0%, 100%": {
      boxShadow: "0 0 0 0 rgba(31, 168, 154, 0.7)",
    },
    "50%": {
      boxShadow: "0 0 0 12px rgba(31, 168, 154, 0)",
    },
  },
  glow: {
    "0%, 100%": {
      filter: "drop-shadow(0 0 8px rgba(31, 168, 154, 0.4))",
    },
    "50%": {
      filter: "drop-shadow(0 0 16px rgba(31, 168, 154, 0.8))",
    },
  },
},

// In the extend animation section:
animation: {
  "slide-in-left": "slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
  "slide-in-right": "slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
  "slide-in-down": "slideInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
  "pulse-ring": "pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  "glow": "glow 2s ease-in-out infinite",
}
```

---

## 4. Create Animated Components

### 4.1 AnimatedSection Component

**File**: `src/components/ui/animated-section.tsx`

```tsx
import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animation = 'slide-up',
  delay = 0,
  className = '',
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true });

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
  }[animation];

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : 'opacity-0'} ${className}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};
```

**Usage**:
```tsx
<AnimatedSection animation="slide-up" delay={100}>
  <h2>Content appears on scroll</h2>
</AnimatedSection>
```

---

### 4.2 AnimatedCounter Component

**File**: `src/components/ui/animated-counter.tsx`

```tsx
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedCounterProps) => {
  const count = useAnimatedCounter(end, duration);

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
```

**Usage**:
```tsx
<AnimatedCounter end={500} suffix="+" className="text-4xl font-bold text-primary" />
```

---

### 4.3 StaggeredList Component

**File**: `src/components/ui/staggered-list.tsx`

```tsx
import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface StaggeredListProps {
  items: ReactNode[];
  delay?: number;
  className?: string;
  itemClassName?: string;
}

export const StaggeredList = ({
  items,
  delay = 50,
  className = '',
  itemClassName = '',
}: StaggeredListProps) => {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true });

  return (
    <div ref={ref} className={className}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} ${itemClassName}`}
          style={{
            animationDelay: isVisible ? `${index * delay}ms` : '0ms',
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
```

**Usage**:
```tsx
<StaggeredList
  items={features.map(f => <FeatureCard key={f.id} {...f} />)}
  delay={100}
  className="space-y-4"
/>
```

---

## 5. Apply to Existing Components

### 5.1 Enhanced Hero Component

```tsx
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { AnimatedSection } from '@/components/ui/animated-section';

export const Hero = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container-custom">
        {/* Badge with glow */}
        <AnimatedSection animation="fade-in" delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full animate-pulse-ring">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Maroc 2026
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection animation="slide-up" delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Maitrisez
            <br />
            <span className="text-primary">Programme RH Accéléré</span>
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection animation="fade-in" delay={200}>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Formation intensive et immersion en entreprise
          </p>
        </AnimatedSection>

        {/* Feature Boxes with stagger */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
          {highlights.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={300 + index * 50}
              className="p-4 bg-primary/5 rounded-lg border border-primary/20 card-hover-effect"
            >
              <item.icon className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm text-foreground font-medium">{item.text}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

### 5.2 Enhanced Card Component

```tsx
export const AnimatedCard = ({ children, className = '' }) => {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`
        p-6 bg-primary/5 rounded-xl border border-primary/20
        card-hover-effect
        ${isVisible ? 'animate-slide-up' : 'opacity-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
```

---

## 6. Advanced Patterns

### 6.1 Text Reveal Effect

```tsx
export const TextReveal = ({ text }: { text: string }) => {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true });
  const words = text.split(' ');

  return (
    <div ref={ref} className="overflow-hidden">
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block mr-2 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: isVisible ? `${i * 50}ms` : '0ms',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};
```

---

### 6.2 Gradient Background Animation

```tsx
export const GradientBackground = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" />
      <div className="relative">{children}</div>
    </div>
  );
};
```

---

## 7. Testing Animation Performance

### Check Performance:
```bash
# Use Chrome DevTools
1. Open DevTools (F12)
2. Go to Performance tab
3. Record page scroll
4. Look for 60fps target
5. Check GPU usage
```

### Test on Mobile:
```bash
# Use Chrome DevTools device emulation
1. Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
2. Select mobile device
3. Test animations under "Throttled" network
```

---

## 8. Accessibility Best Practices

### Always Include:

```css
/* Respect user's motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### In Components:

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

return (
  <div className={prefersReducedMotion ? '' : 'animate-slide-up'}>
    Content
  </div>
);
```

---

## 9. Animation Timing Reference

| Element | Duration | Easing | Delay |
|---------|----------|--------|-------|
| Badge | 600ms | ease-out | 0ms |
| Headline | 600ms | ease-out | 100ms |
| Subtitle | 400ms | ease-out | 200ms |
| Feature boxes | 500ms | ease-out | 300ms + index*50ms |
| CTA buttons | 600ms | ease-out | 400ms |
| Card hover | 300ms | cubic-bezier | - |

---

## 10. Common Issues & Solutions

### Animation Stuttering
- Use `will-change: transform`
- Enable GPU acceleration: `transform: translateZ(0)`
- Reduce number of simultaneous animations

### Animation Not Triggering
- Check if element is in viewport
- Verify IntersectionObserver options
- Test with different threshold values

### Performance Issues
- Profile with Chrome DevTools
- Simplify animation complexity
- Use CSS animations instead of JS
- Reduce animation count on mobile

---

**Implementation Guide Version**: 1.0
**Status**: Ready to Deploy
