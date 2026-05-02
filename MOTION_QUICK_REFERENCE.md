# Motion Design Quick Reference Card

## Animation Timing Cheat Sheet

```
ENTRANCE ANIMATIONS
├─ Fade In:     0.4s ease-out
├─ Slide Up:    0.6s ease-out (20px offset)
├─ Slide Down:  0.6s ease-out (30px offset)
├─ Slide Left:  0.6s ease-out (30px offset)
├─ Slide Right: 0.6s ease-out (30px offset)
├─ Scale In:    0.5s ease-out (0.95 → 1.0)
└─ Count Up:    0.8-1.2s ease-out

INTERACTIVE ANIMATIONS
├─ Hover State:  0.3s ease-in-out
├─ Focus State:  0.3s ease-out
├─ Active Click: 0.2s ease-out
└─ Transition:   0.3s cubic-bezier(0.34, 1.56, 0.64, 1)

AMBIENT ANIMATIONS
├─ Float:       3s ease-in-out infinite
├─ Pulse:       2s ease-in-out infinite
├─ Glow:        2s ease-in-out infinite
└─ Rotate:      3-5s linear infinite

SCROLL-TRIGGERED
├─ Reveal:      0.6-0.8s ease-out
├─ Parallax:    Variable (smooth scroll)
├─ Stagger:     50-150ms per item
└─ Threshold:   10% (when element appears)
```

---

## Easing Functions Reference

```
EASE-OUT          EASE-IN-OUT       EASE-IN         CUSTOM
├─ Fast end       ├─ Smooth both    ├─ Slow start    ├─ cubic-bezier(0.34, 1.56, 0.64, 1)
├─ Natural feel   ├─ Reversible     ├─ Exit motion   └─ Bounce effect
├─ 0.4s-0.6s      ├─ 0.3s-0.5s      ├─ 0.2s-0.3s
└─ Best for:      └─ Best for:      └─ Best for:
   entrance         hover states      exit animations
```

---

## Component Animation Map

### Hero Section
```
Badge           → animate-fade-in + animate-pulse-ring (delay: 0ms)
Headline        → animate-slide-up (delay: 100ms)
Subtitle        → animate-fade-in (delay: 200ms)
Feature Boxes   → animate-scale-in (delay: 300ms + index*50ms)
CTA Buttons     → animate-slide-up (delay: 400ms)
Button Hover    → transform: translateY(-4px), shadow elevation
```

### Content Sections
```
Section Title   → animate-slide-down (delay: 0ms)
Description     → animate-fade-in (delay: 100ms)
Card List       → animate-slide-up (staggered per card, delay: 150ms + index*100ms)
Card Hover      → transform: translateY(-12px), shadow: 0 20px 40px
List Items      → animate-slide-up (delay: 100ms + index*50ms on scroll)
```

### Forms
```
Input Focus     → border glow animation (primary color)
Label           → animate-slide-up (on input focus)
Placeholder     → opacity transition (0.4 → 0 on focus)
Error State     → shake animation + color change
Success State   → checkmark scale-in + color change
Submit          → loading spinner animation
```

### Navigation
```
Header          → blur background on scroll
Nav Links       → underline animation (expand from left)
Active Link     → smooth slide to current position
Mobile Menu     → slide-in-right (0.3s ease-out)
Mobile Close    → slide-out-right (0.2s ease-in)
```

---

## CSS Utility Classes Available

```
ENTRANCE CLASSES
.animate-fade-in           → 0.6s ease-out
.animate-slide-up          → 0.6s ease-out + 20px offset
.animate-slide-in-left     → 0.6s ease-out + 30px offset
.animate-slide-in-right    → 0.6s ease-out - 30px offset
.animate-slide-in-down     → 0.6s ease-out + 30px offset
.animate-scale-in          → 0.4s ease-out, 0.95 → 1.0
.animate-count-up          → 0.8s ease-out

HOVER/INTERACTION CLASSES
.card-hover-effect         → transform + shadow on hover
.transition-colors         → 0.3s color/border change
.transition-all            → 0.3s all properties
.duration-300              → 300ms duration
.hover:bg-primary/5        → Tailwind hover state

AMBIENT CLASSES
.animate-float             → 3s ease-in-out, ±10px vertical
.animate-pulse             → Built-in Tailwind pulse
.animate-glow              → 2s ease-in-out, drop-shadow effect
.animate-pulse-ring        → Pulsing box-shadow ring

DELAY CLASSES
.delay-100                 → 100ms animation delay
.delay-200                 → 200ms animation delay
.delay-300                 → 300ms animation delay
.delay-400                 → 400ms animation delay
```

---

## Motion Design Principles

```
CONSISTENCY
└─ Use same timing for similar element types
  ├─ All cards: 0.3s hover state
  ├─ All entrances: 0.6s ease-out
  └─ All interactive: cubic-bezier(0.34, 1.56, 0.64, 1)

HIERARCHY
└─ Faster for small interactive elements
  ├─ Hover: 200-300ms
  ├─ Entrance: 400-600ms
  └─ Page transitions: 600-800ms

SUBTLETY
└─ Enhance UX, don't distract
  ├─ Offsets: 10-30px max
  ├─ Scale: 0.95-1.05 range
  ├─ Opacity: 0-1 linear or ease-out
  └─ Too much motion = animation sickness

PERFORMANCE
└─ 60fps is the target
  ├─ Only animate: transform, opacity
  ├─ Use GPU acceleration: translateZ(0)
  ├─ Limit simultaneous: max 3-4 per viewport
  └─ Test on real devices
```

---

## Performance Checklist

```
✓ Animations use only transform and opacity
✓ No layout-triggering properties (width, height, position)
✓ GPU acceleration enabled (will-change: transform)
✓ Respects prefers-reduced-motion media query
✓ 60fps target achieved (Chrome DevTools)
✓ Mobile device performance tested
✓ Cross-browser compatibility verified
✓ Accessibility features implemented
✓ Page load time not significantly impacted
✓ Battery consumption reasonable
```

---

## Accessibility Requirements

```
✓ Provide animation alternatives for reduced motion users
✓ Ensure sufficient color contrast for animated elements
✓ Don't use animation as only means of communication
✓ Keep animations time-limited and predictable
✓ Test with screen readers
✓ Keyboard navigation unaffected by animations
✓ Critical animations don't interfere with reading

CSS IMPLEMENTATION:
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

## Implementation Commands

```bash
# Create hook files
mkdir -p src/hooks
touch src/hooks/useIntersectionObserver.ts
touch src/hooks/useAnimatedCounter.ts

# Create component files
mkdir -p src/components/ui
touch src/components/ui/animated-section.tsx
touch src/components/ui/animated-counter.tsx
touch src/components/ui/staggered-list.tsx

# Update existing files
# 1. Update src/index.css (add new keyframes)
# 2. Update tailwind.config.ts (add animations)
# 3. Update component files (integrate hooks)

# Test animations
npm run dev
# Open browser DevTools → Performance tab
# Record animation scrolling at 60fps target
```

---

## Common Animation Patterns

### Pattern 1: Entrance on Page Load
```tsx
<section className="animate-fade-in">
  Content fades in on page load
</section>
```

### Pattern 2: Staggered List
```tsx
{items.map((item, i) => (
  <div
    key={i}
    className="animate-slide-up"
    style={{ animationDelay: `${i * 100}ms` }}
  >
    {item}
  </div>
))}
```

### Pattern 3: Entrance on Scroll
```tsx
const { ref, isVisible } = useIntersectionObserver();
<section ref={ref} className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
  Content reveals when scrolled into view
</section>
```

### Pattern 4: Card Hover Effect
```tsx
<div className="card-hover-effect">
  Lifts up and shows shadow on hover
</div>
```

### Pattern 5: Counter Animation
```tsx
<AnimatedCounter end={500} suffix="+" />
// Counts from 0 to 500 when scrolled into view
```

---

## Browser Support

```
Chrome/Edge:     ✓ Full support (all animations)
Firefox:         ✓ Full support (all animations)
Safari:          ✓ Full support (all animations)
Mobile Chrome:   ✓ Good support (test on real device)
Mobile Safari:   ✓ Good support (disable parallax)
IE 11:           ✗ Not supported (animations won't show)
```

---

## Troubleshooting Guide

| Issue | Cause | Solution |
|-------|-------|----------|
| Animation stutters | Layout recalculation | Use only transform/opacity |
| Animation not showing | Element out of viewport | Check threshold: 0.1 or 0.3 |
| Jerky motion | Dropped frames | Reduce animation complexity |
| Flickering | Reflow/repaint | Use will-change: transform |
| Performance lag | Too many animations | Limit to 3-4 per viewport |
| Mobile slow | No GPU acceleration | Add transform: translateZ(0) |
| Accessibility issues | No reduced motion support | Test with prefers-reduced-motion |

---

## Design Token Reference

```
PRIMARY COLOR:    hsl(172, 70%, 39%)  = #1FA89A (Teal)
ACCENT COLOR:     hsl(20, 70%, 55%)   = #D97534 (Orange)
SHADOW PRIMARY:   0 4px 20px -4px rgba(31, 168, 154, 0.1)
SHADOW HOVER:     0 12px 32px -8px rgba(31, 168, 154, 0.15)

TIMING VARIABLES:
FAST:             0.2-0.3s (micro interactions)
NORMAL:           0.3-0.5s (interactive states)
MEDIUM:           0.6-0.8s (entrances)
SLOW:             0.8-1.2s (counters, complex)
LOOP:             2-5s (ambient)

EASING VARIABLES:
EASE-OUT:         cubic-bezier(0, 0, 0.2, 1)
EASE-IN-OUT:      cubic-bezier(0.4, 0, 0.2, 1)
EASE-IN:          cubic-bezier(0.4, 0, 1, 1)
BOUNCE:           cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## Next Steps

1. **Copy CSS animations** to `src/index.css`
2. **Update Tailwind config** with new animations
3. **Create hook files** for intersection observer and counter
4. **Create component files** for animated sections
5. **Apply to existing components** (Hero, Cards, Sections)
6. **Test on real devices** (mobile, tablet, desktop)
7. **Audit performance** with Chrome DevTools
8. **Verify accessibility** with reduced motion settings

---

**Quick Reference Version**: 1.0
**Last Updated**: May 2, 2026
**Status**: Ready to Use
