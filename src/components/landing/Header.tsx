import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(true);

  const scrollToForm = () => {
    setShowCTA(false);
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const formSection = document.getElementById('contact-form');
      const finalCTA = document.getElementById('contact');
      const footer = document.querySelector('footer');

      if (formSection && finalCTA && footer) {
        const formRect = formSection.getBoundingClientRect();
        const finalCTARect = finalCTA.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const inFinalCTA = finalCTARect.top < windowHeight * 0.5 && finalCTARect.bottom > windowHeight * 0.2;
        const inFormSection = formRect.top < windowHeight * 0.5 && formRect.bottom > 0;
        const inFooter = footerRect.top < windowHeight;

        setShowCTA(inFinalCTA || inFooter || !inFormSection);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-primary/10 shadow-[0_1px_16px_-4px_hsl(172_70%_39%_/_0.08)] py-3'
            : 'bg-background py-3'
        }`}
      >
        <div className="container-custom relative flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center transition-all duration-300 ${
            showCTA ? '' : 'flex-1 justify-center'
          }`}>
            <motion.a
              href="#"
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.25 }}
            >
              <img
                src={logo}
                alt="World Wide Progress"
                className="h-10 md:h-12 w-auto"
                style={{
                  imageRendering: 'auto',
                  transform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                }}
              />
            </motion.a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <AnimatePresence mode="wait">
              {showCTA && (
                <motion.div
                  key="desktop-cta"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
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
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
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
