import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import logo from '@/assets/logo.png';

const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(true);
  
  // Refs for visibility tracking
  const formSectionRef = useRef<HTMLElement | null>(null);
  const finalCtaRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    let ticking = false;

    // Simple scroll listener for header background
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Use IntersectionObserver for CTA visibility (non-blocking)
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      // Check if any target is intersecting
      const anyVisible = entries.some((entry) => entry.isIntersecting);
      setShowCTA(!anyVisible);
    }, observerOptions);

    // Observe form section
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      observer.observe(formSection);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 will-change-[background-color] ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-primary/10 shadow-[0_1px_16px_-4px_hsl(172_70%_39%_/_0.08)] py-3'
            : 'bg-background py-3'
        }`}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div className="container-custom relative flex items-center justify-between">
          {/* Logo - no conflicting CSS transitions */}
          <motion.div
            layout
            className="flex items-center"
            transition={{ ease: EASING.smooth, duration: 0.25 }}
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            <motion.a
              href="#"
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ ease: EASING.smooth, duration: 0.15 }}
              style={{ willChange: 'transform' }}
            >
              <img
                src={logo}
                alt="World Wide Progress"
                className="h-10 md:h-12 w-auto"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              />
            </motion.a>
          </motion.div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center" style={{ transform: 'translate3d(0, 0, 0)' }}>
            <AnimatePresence mode="wait">
              {showCTA && (
                <motion.div
                  key="desktop-cta"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ ease: EASING.smooth, duration: 0.2 }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <ShimmerButton
                    onClick={scrollToForm}
                    background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
                    shimmerColor="#ffffff"
                    className="text-base font-semibold"
                  >
                    S&apos;inscrire au programme
                  </ShimmerButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              {showCTA && (
                <motion.div
                  key="mobile-cta"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ ease: EASING.smooth, duration: 0.2 }}
                >
                  <ShimmerButton
                    onClick={scrollToForm}
                    background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
                    shimmerColor="#ffffff"
                    className="text-sm font-semibold px-4 py-2"
                  >
                    S&apos;inscrire
                  </ShimmerButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
