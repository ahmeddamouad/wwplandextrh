import { BookOpen, Briefcase, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.34, 1.56, 0.64, 1],
  expo: [0.16, 1, 0.3, 1],
};

const Differentiation = () => {
  const phases = [
    {
      icon: BookOpen,
      phase: '1',
      title: 'Formation intensive',
      duration: '2 semaines',
      color: 'bg-primary',
      details: [
        'Format accéléré et orienté pratique',
        'Apprentissage des 5 blocs opérationnels',
        'Cas concrets du marché marocain',
      ],
    },
    {
      icon: Briefcase,
      phase: '2',
      title: 'Immersion en entreprise',
      duration: '2 mois',
      color: 'bg-accent',
      details: [
        'Missions RH réelles avec suivi structuré',
        'Intégration en entreprise partenaire',
        'Mise en pratique des compétences',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary w-full overflow-hidden" id="program-details">
      <div className="container-custom w-full">
        <div className="space-y-16">

          {/* Section Header — left aligned */}
          <ScrollReveal direction="up">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Programme</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Structure du Programme
                <br />
                <span className="text-primary">en 2 Phases</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Une architecture en deux temps garantit une montée en compétences rapide avant une mise en situation professionnelle réelle.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline + Phase cards */}
          <div className="relative">

            {/* Animated connector line — md+ only */}
            <div className="hidden md:block absolute top-[52px] left-[16.5%] right-[16.5%] h-px overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ ease: EASING.expo, duration: 1.4, delay: 0.2 }}
                style={{ originX: 0, willChange: 'transform' }}
                className="h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"
              />
            </div>

            {/* Phase cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {phases.map((phase, index) => (
                <ScrollReveal
                  key={index}
                  direction={index === 0 ? 'left' : 'right'}
                  delay={0.15 + index * 0.15}
                >
                  <motion.div
                    whileHover={{ y: -8, boxShadow: '0 20px 40px -8px hsl(172 70% 39% / 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ ease: EASING.smooth, duration: 0.3 }}
                    className={`p-8 rounded-2xl border space-y-6 will-change-transform transition-all ${
                      index === 0
                        ? 'bg-background/70 border-primary/20 hover:border-primary/40'
                        : 'bg-primary/5 border-primary/25 hover:border-primary/40'
                    }`}
                  >
                    {/* Phase header */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${phase.color}`}
                      >
                        <span className="text-white text-2xl font-bold">{phase.phase}</span>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-0.5">
                          Phase
                        </p>
                        <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                        <p className="text-primary font-semibold text-sm">{phase.duration}</p>
                      </div>
                    </div>

                    <div className="h-px bg-primary/15" />

                    {/* Detail list */}
                    <ul className="space-y-3">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Tagline — terracotta left-border accent */}
          <ScrollReveal delay={0.4}>
            <div className="pl-6 border-l-2 border-accent">
              <p className="text-lg font-semibold text-foreground">
                La formation prépare, l&apos;immersion{' '}
                <span className="text-primary">confirme et consolide</span>
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Differentiation;
