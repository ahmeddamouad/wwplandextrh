import React from 'react';
import { BookOpen, Users, Briefcase, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ShimmerButton } from '@/components/ui/shimmer-button';

// Premium easing curves for authentic motion
const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.34, 1.56, 0.64, 1],
  expo: [0.16, 1, 0.3, 1],
  quart: [0.25, 1, 0.5, 1],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: EASING.expo,
      duration: 0.8,
    },
  },
};

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToDetails = () => {
    const detailsSection = document.getElementById('program-details');
    detailsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const highlights = [
    { icon: BookOpen, text: 'Formation intensive 2 semaines' },
    { icon: Briefcase, text: 'Immersion en entreprise 2 mois' },
    { icon: Target, text: 'Approche 100% pratique' },
    { icon: Users, text: 'Profils opérationnels garantis' },
  ];

  const floatingStats = [
    { label: 'Formation', value: '2 sem.', color: 'text-primary', delay: 0.08 },
    { label: 'Immersion', value: '2 mois', color: 'text-accent', delay: 0.12 },
    { label: 'Modules', value: '7', color: 'text-foreground', delay: 0.16 },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-background w-full overflow-hidden pt-20">
      <div className="container-custom w-full">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center py-16 md:py-0">

          {/* LEFT COLUMN — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/8 rounded-full border border-primary/20 text-primary font-semibold text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                  />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                Maroc 2026
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Maitrisez
              <br />
              <span className="text-primary">Programme RH<br className="hidden sm:block" /> Accéléré</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Une initiative ambitieuse pour former des profils RH immédiatement opérationnels — combinant formation intensive et immersion terrain dans les entreprises marocaines.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <ShimmerButton
                onClick={scrollToForm}
                background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
                shimmerColor="#ffffff"
                className="text-base font-semibold flex items-center justify-center gap-2 px-8 py-3 will-change-transform"
              >
                S&apos;inscrire au programme
                <ArrowRight className="w-5 h-5" />
              </ShimmerButton>
              <motion.button
                onClick={scrollToDetails}
                whileHover={{ scale: 1.05, borderColor: 'hsl(172, 70%, 39%)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full border border-foreground/20 text-foreground hover:text-primary transition-all duration-300 font-medium text-sm will-change-transform"
              >
                En savoir plus
              </motion.button>
            </motion.div>

            {/* Feature Pill Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-2"
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/6 rounded-full border border-primary/15 text-sm text-foreground font-medium"
                >
                  <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Video display */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="relative w-full max-w-2xl aspect-auto h-[550px]">

              {/* Video element */}
              <motion.video
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: EASING.expo, duration: 0.6, delay: 0.15 }}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain bg-transparent rounded-[40px]"
              >
                <source src="/logo.mp4" type="video/mp4" />
              </motion.video>

              {/* Floating stat chips (persistent + lightweight animation for smoothness) */}
              {floatingStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    ease: EASING.smooth,
                    duration: 0.28,
                    delay: stat.delay,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="will-change-transform"
                >
                  <div
                    className={`absolute rounded-2xl p-[1px] bg-gradient-to-r from-primary/10 to-transparent z-10 ${
                      i === 0 ? 'top-20 left-5' : i === 1 ? 'bottom-20 right-5' : 'top-6 right-5'
                    }`}
                  >
                    <div
                      className="px-4 py-3 bg-background/95 rounded-[inherit] shadow-lg border border-border/60 will-change-transform"
                      style={{ transform: 'translate3d(0, 0, 0)' }}
                    >
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
                      <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
