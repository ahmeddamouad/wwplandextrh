# Motion Design Visual Implementation Guide

This guide provides ASCII diagrams and visual references for understanding motion design patterns.

---

## 1. Animation Timing Visualization

### Fade-In Animation (0.6s ease-out)
```
Timeline:     0ms          200ms         400ms         600ms
              |            |             |             |
Opacity:      0% ═════════════════════════════════════ 100%
              ↓            ↓             ↓             ↓
Visual:      [·]          [◐]           [◑]           [●]
              
Progress:     START   ----ACCELERATE----DECELERATE--- END
```

### Slide-Up Animation (0.6s ease-out, 20px offset)
```
Timeline:     0ms          200ms         400ms         600ms
              |            |             |             |
Y Position:   +20px ─────────────────────────────── 0px
Opacity:      0% ═════════════════════════════════════ 100%
              ↓            ↓             ↓             ↓
Visual:       [     ]      [  ◐ ]        [ ◑  ]        [●]
              
Effect:       ENTER        ACCELERATE    DECELERATE    PLACED
```

### Scale-In Animation (0.4s ease-out, 0.95→1.0)
```
Timeline:     0ms          100ms         200ms         400ms
              |            |             |             |
Scale:        95% ════════════════════════════════ 100%
Opacity:      0% ═════════════════════════════════════ 100%
              ↓            ↓             ↓             ↓
Visual:       [·]          [◑]           [◐]           [●]
              
Effect:       TINY         GROWING       ALMOST FULL   COMPLETE
```

---

## 2. Staggered Animation Pattern

### List Item Entrance (50ms stagger)
```
Item 1:  [███████████████────────────]  0ms delay  → appears first
         
Item 2:     [███████████████────────]  50ms delay → slight delay
         
Item 3:        [███████████████──]  100ms delay → more delay
         
Item 4:           [███████████]  150ms delay → last to appear
         
Timeline: 0  50  100 150 200 250 300 350 400 450 500 550 600ms
          ├──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┤

Visual Effect:
  Item 1 [●][●][●][●]
  Item 2    [●][●][●][●]
  Item 3       [●][●][●][●]
  Item 4          [●][●][●][●]
```

### Recommended Stagger Delays
```
SMALL LISTS (3-5 items):    50-75ms between items
MEDIUM LISTS (6-10 items):  75-100ms between items
LARGE LISTS (10+ items):    100-150ms between items
GRIDS:                      100ms + (column_index × 50ms)
```

---

## 3. Card Hover Effects

### Elevation Animation
```
NORMAL STATE                    HOVER STATE
┌─────────────────┐             ┌─────────────────┐
│                 │             │   LIFTED UP     │
│   CARD CONTENT  │             │                 │
│                 │             │   CARD CONTENT  │
└─────────────────┘             │                 │
       ↑                        └─────────────────┘
  shadow: 4px                       ↑
                                shadow: 20px
                            offset: -12px (up)
```

### Hover Transition Code
```
NORMAL:
- Transform: translateY(0)
- Shadow: 0 4px 20px rgba(31, 168, 154, 0.1)
- Duration: -

TRANSITION:
- Duration: 300ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Properties: transform, box-shadow, color, border

HOVER:
- Transform: translateY(-12px)
- Shadow: 0 20px 40px rgba(31, 168, 154, 0.2)
- Border: rgba(31, 168, 154, 0.4)
```

---

## 4. Scroll-Triggered Animation Diagram

### Intersection Observer Trigger Points
```
VIEWPORT HEIGHT
┌──────────────────────────┐
│                          │  ← Top visible area
│      VISIBLE             │
│                          │
├──────────────────────────┤
│    ELEMENT IN VIEW       │  ← Threshold: 10% visible
│    [ANIMATION TRIGGERS]  │  ← Element bottom enters
│                          │
├──────────────────────────┤
│      HIDDEN BELOW        │
│                          │
└──────────────────────────┘

ANIMATION SEQUENCE:
Element Position:      Animation State:
[Hidden Above]    →   opacity: 0, transform: translateY(20px)
[10% Visible]     →   IntersectionObserver detects
[Animating]       →   opacity: 1, transform: translateY(0)
[Fully Visible]   →   Complete (stops animating)
[Below Viewport]  →   Stays visible (animation complete)
```

---

## 5. Easing Function Curves

### ease-out (Fast Start, Slow End)
```
1.0 ┌─────────────────┐
    │                 │ ← Quick start
0.8 │         ╱╲      │
    │        ╱  ╲     │
0.6 │       ╱    ╲    │
    │      ╱      ╲   │
0.4 │     ╱        ╲  │
    │    ╱          ╲─│
0.2 │   ╱              │
    │  ╱               │
0.0 └──────────────────┘
    0   250  500  750  1000ms
    
Best for: Page entrances, content reveals
Effect: Natural, responsive feeling
```

### ease-in-out (Smooth Both Directions)
```
1.0 ┌──────────────────┐
    │      ╱╲╲        │ ← Smooth middle
0.8 │     ╱  ╲╲      │
    │    ╱    ╲╲    │
0.6 │   ╱      ╲╲   │
    │  ╱        ╲  │
0.4 │ ╱          ╲ │
    │╱            ╲│
0.2 │              │
    │              │
0.0 └──────────────────┘
    0   250  500  750  1000ms
    
Best for: Hover states, reversible actions
Effect: Balanced, smooth transitions
```

### cubic-bezier(0.34, 1.56, 0.64, 1) [Bounce]
```
1.2 ┌────────╱╲────────┐
    │       ╱  ╲       │
1.0 │      ╱    ╲      │ ← Overshoots (bounce)
    │     ╱      ╲     │
0.8 │    ╱        ╲    │
    │   ╱          ╲   │
0.6 │  ╱            ╲  │
    │ ╱              ╲─│
0.4 │                  │
    │                  │
0.0 └──────────────────┘
    0   250  500  750  1000ms
    
Best for: Playful interactions, card hovers
Effect: Engaging, responsive, bouncy
```

---

## 6. Component Animation Timeline

### Hero Section Complete Animation Sequence
```
TIME (ms)      ACTION                          VISUAL STATE
0             Page loads                      All content hidden
0-100         Badge animation starts          [●] Badge fades in
100-200       Headline animation starts       [▓▓▓] Text slides up
200-300       Subtitle fades in               [░░░] Text visible
300-350       Feature box 1 scales in         [◆] Box 1 appears
350-400       Feature box 2 scales in         [◆◆] Box 2 appears
400-450       Feature box 3 scales in         [◆◆◆] Boxes visible
500-600       Button animation starts         [★] Button slides up
600+          All animations complete        ✓ Hero section ready

Final State:
┌─────────────────────────────┐
│    [●] BADGE (pulsing)      │
│                             │
│    MAITRISEZ               │
│    PROGRAMME RH ACCÉLÉRÉ    │
│                             │
│  Detailed description text  │
│                             │
│ [◆][◆][◆] Feature boxes     │
│                             │
│      [CTA BUTTON] [Link]    │
└─────────────────────────────┘
```

---

## 7. Mobile vs Desktop Animation Differences

### Desktop (Full Animation)
```
Hover states:           Enabled (300ms transitions)
Scale on hover:         1.0 → 1.05
Shadow elevation:       4px → 20px
Parallax:              Enabled (smooth scroll)
Duration:              600-800ms
Animation count:       All enabled
```

### Mobile (Optimized)
```
Hover states:           Tap/press feedback only
Scale on tap:           1.0 → 1.03 (subtle)
Shadow elevation:       4px → 12px (reduced)
Parallax:              Disabled (performance)
Duration:              300-400ms (faster)
Animation count:       Reduced (3-4 max per screen)
```

### Responsive Animation Adjustments
```
480px (Mobile):
  - Reduce duration: 600ms → 400ms
  - Reduce offset: 20px → 15px
  - Disable parallax
  - Simplify hover effects
  
768px (Tablet):
  - Moderate duration: 500ms
  - Standard offset: 20px
  - Optional parallax
  - Standard hover effects
  
1024px+ (Desktop):
  - Full duration: 600-800ms
  - Full offset: 20-30px
  - Full parallax enabled
  - All hover effects enabled
```

---

## 8. Performance Monitoring Diagram

### Frame Budget Visualization
```
TARGET: 60 FPS = 16.67ms per frame

Good Performance:
[████████] 8ms   ← Animation work
[    ] 8.67ms    ← Safe margin
Result: 60 FPS ✓

Okay Performance:
[██████████████] 14ms ← Animation work
[  ] 2.67ms      ← Tight margin
Result: 60 FPS ✓ (risky)

Poor Performance:
[██████████████████] 20ms ← Animation work
[OVERFLOW] -3.33ms   ← EXCEEDED!
Result: 30 FPS ✗ (dropped frames)
```

### CPU/GPU Usage During Animation
```
NORMAL USAGE:          DURING HEAVY ANIMATION:
CPU: ██░░░░░░░░ 20%   CPU: █████░░░░░░░░░░ 28%
GPU: ████░░░░░░ 40%   GPU: ███████░░░░░░░░ 65%
RAM: ████░░░░░░ 40%   RAM: ████░░░░░░░░░░░░ 40%
BAT: ████░░░░░░ 40%   BAT: █████░░░░░░░░░░ 48%

✓ Acceptable ranges
✓ No significant impact on device performance
```

---

## 9. Accessibility Motion Modes

### User Preference Detection
```
JavaScript Detection:
const prefersReducedMotion = 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

CSS Detection:
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

MODES:
Mode 1: No motion preference
  → All animations enabled
  → Full durations: 600-800ms
  
Mode 2: Reduced motion preference
  → All animations disabled or minimal
  → Use opacity only
  → No transforms/movement
  → Instant or 100ms transitions
```

### Motion Sensitivity Spectrum
```
NO ANIMATION     MINIMAL               STANDARD            FULL ANIMATION
(Epilepsy)       (Motion Sensitive)    (Default)           (All Users)
│                │                     │                   │
0%              25%                    50%                 100%
└────────────────┴─────────────────────┴───────────────────┘
  - Opacity only   - Slow animations    - All effects    - Parallax
  - No movement    - Reduced scale      - Standard       - Shimmer
  - Static         - Minimal offset     timing           - Ambient
  
Support through prefers-reduced-motion media query
```

---

## 10. Loading and Error States Animation

### Loading State Spinner
```
FRAME 1:          FRAME 2:          FRAME 3:
   ╱─╲               ╱╲╱             ╱──╲
  │   │         →   │   │         →   │  │
   ╲─╱               ╱ ╲╱             ╱──╲
  Rotate 90°        Rotate 180°       Rotate 270°

Duration: 100ms per frame (continuous)
Effect: Smooth 360° rotation at 1s per cycle
```

### Error Shake Animation
```
INITIAL         SHAKE 1         SHAKE 2         FINAL
X: 0px          X: -8px         X: +8px         X: 0px
│ │             │ │             │ │             │ │
└─┘      →    ┌─┐       →    ┌─┐       →    └─┘
                │ │           │ │
                
Duration: 100ms total (50ms each direction)
Repeat: 2-3 times on error
Effect: Gets user attention to error
```

---

## 11. Scroll Parallax Effect Diagram

### Simple Parallax (Offset Difference)
```
VIEWPORT

User Scrolls Down:
───────────────
   BACKGROUND
   (slow movement)
───────────────
   FOREGROUND
   (fast movement)
───────────────

Visual Effect:
Initial:        Scrolled 100px:    Scrolled 200px:
[████]          [███ ]             [██  ]
[████████]  →   [██████  ]     →   [█████     ]

Background moves slower → depth illusion
```

---

## 12. Color Transition on Hover

### Border Color Animation
```
NORMAL STATE:
┌─────────────────┐
│ border: #ddd    │
│ rgb(200,200,200)│
└─────────────────┘

TRANSITION (300ms):
┌─────────────────┐
│ border: #1fa89a │
│ (animating...)  │
└─────────────────┘

HOVER STATE:
┌─────────────────┐
│ border: #1fa89a │
│ rgb(31,168,154) │
└─────────────────┘

Transition Code:
transition: border-color 300ms ease-in-out;
```

---

## 13. Focus State Animations

### Input Focus Ring Animation
```
UNFOCUSED:              FOCUS START:         FOCUSED:
┌──────────────────┐   ┌──────────────────┐ ┌──────────────────┐
│                  │   │    ┌────────┐    │ │  ┌────────┐      │
│  [input text]    │→  │    │input   │    │→│  │input   │      │
│                  │   │    └────────┘    │ │  └────────┘      │
└──────────────────┘   └──────────────────┘ └──────────────────┘
  
  Box-shadow: none   Box-shadow: glow    Box-shadow: 0 0 8px
  Border: #ddd       Border: animating   Border: #1fa89a

Animation:
Duration: 200ms
Easing: ease-out
Properties: box-shadow, border-color
```

---

## 14. Button State Machine

### Button State Transitions
```
┌─────────────┐
│   NORMAL    │
│  [Button]   │
└─────────────┘
      ↓ (hover)
┌─────────────┐
│   HOVER     │    ← Scale: 1.02
│  [▲Button▲] │    ← Shadow elevation
└─────────────┘    ← Color: primary → accent
      ↓ (click)
┌─────────────┐
│   ACTIVE    │    ← Scale: 0.98
│  [▼Button▼] │    ← Shadow reduction
└─────────────┘    ← Color: darker shade
      ↓ (release)
┌─────────────┐
│   LOADING   │    ← Spinner animation
│ [⟳Button⟳] │    ← Disabled state
└─────────────┘
      ↓ (complete)
┌─────────────┐
│  SUCCESS    │    ← Checkmark animation
│  [✓ Done]   │    ← Color: success green
└─────────────┘

All transitions: 200-300ms
Easing: ease-in-out
```

---

## 15. Summary: Animation Decision Tree

```
SHOULD I ANIMATE THIS?
           │
           ↓
Is it user-interactive?
    ├─ YES → Hover state? (300ms ease-in-out)
    │         Focus state? (200ms ease-out)
    │         Click feedback? (150ms scale)
    │
    └─ NO → Is it content entrance?
             ├─ YES → Scroll-triggered? (600ms ease-out)
             │         Page load? (400-600ms staggered)
             │
             └─ NO → Is it ambient/decorative?
                     ├─ YES → Background? (3-5s infinite)
                     │         Icon? (3s ease-in-out float)
                     │
                     └─ NO → DON'T ANIMATE (Keep it static)

ALWAYS:
✓ Respect prefers-reduced-motion
✓ Test on real mobile devices
✓ Monitor 60fps target
✓ Keep durations consistent
```

---

**Motion Design Visual Guide Version**: 1.0
**Status**: Reference Complete
**Created**: May 2, 2026
