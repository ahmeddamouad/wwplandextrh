import { AlertTriangle, Clock, Users, BookMarked } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PainPoints = () => {
  const painPoints = [
    {
      icon: BookMarked,
      title: 'Formations trop théoriques',
      desc: 'Peu ancrées dans la pratique réelle — les diplômés arrivent sans repères opérationnels concrets.',
    },
    {
      icon: Users,
      title: 'Profils sans expérience terrain',
      desc: 'À l\'embauche sans mise en pratique concrète.',
    },
    {
      icon: AlertTriangle,
      title: 'Fossé entre formations et attentes',
      desc: 'Recruteurs en attente de candidats opérationnels.',
    },
    {
      icon: Clock,
      title: 'Temps d\'adaptation prolongé',
      desc: 'Entreprises attendent des candidats opérationnels immédiatement.',
    },
  ];

  const [first, ...rest] = painPoints;
  const FirstIcon = first.icon;
  const lastCard = rest[2];
  const LastIcon = lastCard?.icon;

  return (
    <section className="py-20 md:py-32 bg-secondary w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="space-y-16">

          {/* Section Header — left aligned */}
          <ScrollReveal direction="up">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Le marché</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pourquoi ce programme ?
                <br />
                <span className="text-primary">Le constat du marché</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Un marché RH en décalage : les formations restent trop théoriques, déconnectées des réalités opérationnelles.
              </p>
            </div>
          </ScrollReveal>

          {/* Asymmetric card grid */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5">

            {/* Card 0 — large, spans 2 rows */}
            <div className="md:row-span-2">
              <ScrollReveal direction="left" delay={0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
                  className="h-full p-8 bg-background rounded-2xl border border-primary/15 flex flex-col gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FirstIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{first.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{first.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-primary/10">
                    <p className="text-sm text-primary font-medium">Principal obstacle identifié</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Cards 1 & 2 — stacked right column */}
            <div className="flex flex-col gap-5">
              {rest.slice(0, 2).map((point, i) => {
                const Icon = point.icon;
                return (
                  <ScrollReveal key={i} direction="right" delay={0.2 + i * 0.1}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
                      className="p-6 bg-background rounded-2xl border border-primary/15 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{point.title}</h3>
                        <p className="text-sm text-muted-foreground">{point.desc}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Card 3 — full width bottom */}
            {lastCard && LastIcon && (
              <div className="md:col-span-2">
                <ScrollReveal direction="up" delay={0.4}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
                    className="p-6 bg-background rounded-2xl border border-primary/15 flex items-start gap-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <LastIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{lastCard.title}</h3>
                      <p className="text-sm text-muted-foreground">{lastCard.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              </div>
            )}

          </div>

          {/* Solution callout — left border accent */}
          <ScrollReveal delay={0.5}>
            <div className="pl-6 border-l-2 border-primary">
              <p className="text-primary font-semibold mb-1">Notre solution :</p>
              <p className="text-muted-foreground">
                Une expérience professionnelle structurée qui transforme les profils juniors en praticiens opérationnels.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
