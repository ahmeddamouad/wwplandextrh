# Progress Spark - Copilot Instructions

## Project Overview

This is a **landing page for World Wide Progress**, a recruitment consultancy in Morocco. Built with React, TypeScript, Vite, and shadcn/ui components with heavy Tailwind CSS customization. The page is a single-page application with modular landing sections.

## Architecture & Structure

### Component Organization
- **`src/components/landing/`** - Modular landing sections (Hero, PainPoints, Methodology, etc.) composed into `src/pages/Index.tsx`
- **`src/components/ui/`** - shadcn/ui components (Button, Dialog, Form, etc.) - DO NOT manually edit these; use shadcn CLI to add/update
- **`src/contexts/`** - React contexts (ContactFormContext controls dialog state across components)
- **`src/pages/`** - Page-level components (Index.tsx assembles landing sections)

### Key Patterns

**1. Contact Form Dialog Pattern**
The contact form is a global dialog managed by `ContactFormContext`. Any component can trigger it:
```tsx
import { useContactForm } from '@/contexts/ContactFormContext';
const { openContactForm } = useContactForm();
// Call openContactForm() to open the dialog
```

**2. Landing Section Structure**
Each landing section follows this pattern (see `src/components/landing/Hero.tsx`):
- Self-contained component with own imports
- Uses custom CSS utility classes from `src/index.css`: `container-custom`, `heading-xl`, `body-lg`
- Animations via Tailwind utilities: `animate-slide-up`, `animate-fade-in`
- Icons from `lucide-react`

**3. Styling Conventions**
- **Brand colors** defined as CSS variables in `src/index.css` (primary: #1FA89A teal, accent: terracotta)
- **Custom utility classes** in `@layer components`: `container-custom`, `heading-xl`, `heading-lg`, `body-lg`, `body-sm`, `card-hover`
- **Button variants** extended in `src/components/ui/button.tsx`: `hero`, `cta` variants with shadow animations
- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes with CVA variants

**4. Import Aliases**
Always use `@/` imports configured in `vite.config.ts` and `tsconfig.json`:
```tsx
import { Button } from '@/components/ui/button';
import { useContactForm } from '@/contexts/ContactFormContext';
```

## Development Workflow

### Running the Project
```bash
npm run dev       # Dev server at localhost:8080
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint check
```

### Adding UI Components
Use shadcn CLI, NOT manual creation:
```bash
npx shadcn@latest add [component-name]
```
This ensures proper integration with the existing design system and CSS variables.

### TypeScript Config
- `noImplicitAny: false` and `strictNullChecks: false` - project is lenient on type strictness
- `skipLibCheck: true` to speed up compilation
- Expect some flexible typing in existing code

## Specific Implementation Details

### Vite Configuration
- SWC plugin for fast React refresh
- `lovable-tagger` plugin in dev mode (tags components for Lovable.dev platform)
- Port 8080, IPv6 enabled

### Form Handling
Forms use React state directly (see `ContactFormDialog.tsx`), not react-hook-form despite it being installed. Follow existing patterns unless refactoring.

### Responsive Design
- Mobile-first with Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Use `container-custom` class (defined in CSS) for consistent page width and padding

### Asset Management
Import images directly from `src/assets/`:
```tsx
import heroImage from '@/assets/hero-recruitment.jpg';
```

## Common Pitfalls

1. **Don't edit `src/components/ui/` components directly** - regenerate with shadcn CLI
2. **Always use `@/` imports**, not relative paths like `../../`
3. **Check `src/index.css`** for existing custom utility classes before creating inline styles
4. **Wrap pages with `ContactFormProvider`** if they need to trigger the contact dialog
5. **Add new routes ABOVE the catch-all `*` route** in `App.tsx` (see comment in file)

## Testing & Quality

No test suite currently configured. Rely on TypeScript and ESLint for error checking. Run `npm run lint` before committing.
