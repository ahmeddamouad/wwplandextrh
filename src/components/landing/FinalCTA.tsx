import { ShimmerButton } from '@/components/ui/shimmer-button';
import { ArrowRight, Users, Zap, GraduationCap, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
};

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const targets = [
    { icon: GraduationCap, text: 'Jeunes diplômés en Ressources Humaines' },
    { icon: Zap, text: 'Profils en reconversion professionnelle' },
    { icon: Users, text: 'Assistants RH souhaitant se structurer' },
  ];

  const features = [
    'Formation + immersion + coaching CV',
    'Simulation d\'entretien + accompagnement insertion',
    'Dashboard Power BI & Intelligence Artificielle',
    'Suivi personnalisé tout au long du programme',
  ];

  const paymentOptions = [
    { label: 'Paiement complet', amount: '8 000 DH', desc: 'Accès immédiat' },
    { label: 'En 3 mois', amount: '8 000 DH', desc: '2 666 DH × 3' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Section Header */}
          <ScrollReveal direction="up">
            <div className="space-y-4 text-center">
              <p className="eyebrow">Offre</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Prêt à transformer
                <br />
                <span className="text-primary">votre carrière RH ?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Le programme s&apos;adresse à ceux qui veulent devenir des praticiens RH opérationnels rapidement.
              </p>
            </div>
          </ScrollReveal>

          {/* Target audience — horizontal rows, not 3-col card grid */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
              {targets.map((target, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-3 px-5 py-3 bg-background/60 rounded-full border border-primary/20"
                >
                  <target.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{target.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Urgency banner with subtle pulse */}
          <ScrollReveal delay={0.15}>
            <motion.div
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="p-4 rounded-xl bg-accent/10 border border-accent/35 text-center will-change-[opacity]"
              style={{ transform: 'translate3d(0, 0, 0)' }}
            >
              <p className="font-bold text-accent flex items-center justify-center gap-2 text-sm">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  style={{ willChange: 'opacity' }}
                >
                  ●
                </motion.span>
                Réservez votre place — 10 places disponibles
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Premium card — 1px gradient border */}
          <ScrollReveal delay={0.2}>
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-border/40 to-accent/20">
              <div className="p-8 bg-background rounded-[calc(1rem-1px)] space-y-6">

                <div>
                  <h3 className="text-2xl font-bold text-foreground">Offre Premium</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Inclut tout pour réussir votre transformation RH
                  </p>
                </div>

                {/* Features list — staggered reveal */}
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.08,
                        ease: EASING.smooth,
                        duration: 0.6,
                      }}
                      className="flex items-start gap-3 will-change-[opacity,transform]"
                      style={{ transform: 'translate3d(0, 0, 0)' }}
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Payment options */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Options de paiement :
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentOptions.map((option, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -4 }}
                        transition={{ ease: EASING.smooth, duration: 0.25 }}
                        className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-center cursor-default will-change-transform"
                        style={{ transform: 'translate3d(0, 0, 0)' }}
                      >
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          {option.label}
                        </p>
                        <p className="text-2xl font-bold text-primary mt-1">{option.amount}</p>
                        <p className="text-xs text-muted-foreground">{option.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <ShimmerButton
                  onClick={scrollToForm}
                  background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
                  shimmerColor="#ffffff"
                  className="w-full text-base font-semibold flex items-center justify-center gap-2"
                >
                  S&apos;inscrire au programme
                  <ArrowRight className="w-5 h-5" />
                </ShimmerButton>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
