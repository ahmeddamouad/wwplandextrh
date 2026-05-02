import { Users, DollarSign, AlertTriangle, BarChart3, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MarqueeTrack from '@/components/ui/MarqueeTrack';

const PersonnelCostBenefits = () => {
  const blocks = [
    {
      icon: Users,
      number: '1',
      title: 'Recrutement',
      details: ['Analyse du besoin & fiche de poste', 'Conduite d\'entretien', 'Évaluation des candidats'],
    },
    {
      icon: BarChart3,
      number: '2',
      title: 'Administration RH',
      details: ['Gestion des dossiers salariés', 'Contrats de travail', 'Obligations légales'],
    },
    {
      icon: DollarSign,
      number: '3',
      title: 'Paie',
      details: ['Brut / Net & IR', 'Éléments variables', 'Contrôle des bulletins'],
    },
    {
      icon: AlertTriangle,
      number: '4',
      title: 'Gestion Disciplinaire',
      details: ['Avertissement & recadrage', 'Procédure disciplinaire'],
    },
    {
      icon: MessageSquare,
      number: '5',
      title: 'RH Opérationnelle',
      details: ['Gestion absences & retards', 'Communication managers'],
    },
    {
      icon: TrendingUp,
      number: '6',
      title: 'Dashboard BI',
      details: ['Power BI & Analytics', 'Tableaux de bord RH', 'Insights data-driven'],
    },
    {
      icon: Zap,
      number: '7',
      title: 'Intelligence Artificielle',
      details: ['Automatisation des process RH', 'Analyse prédictive', 'Optimisation des tâches'],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background w-full overflow-hidden">

      {/* Section header — inside container */}
      <div className="container-custom mb-16">
        <ScrollReveal direction="up">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Contenu</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contenu Pédagogique
              <br />
              <span className="text-primary">7 Modules Complets</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Maîtrisez les fonctions RH essentielles + Power BI + Intelligence Artificielle pour accélérer vos process RH.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee — full bleed */}
      <MarqueeTrack speed={35} pauseOnHover className="py-4">
        {blocks.map((block, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
            className="flex-shrink-0 w-56 p-6 bg-primary/5 border border-primary/20 rounded-2xl space-y-4 cursor-default select-none"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex w-8 h-8 rounded-full bg-primary items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {block.number}
              </span>
              <block.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-bold text-foreground text-sm leading-snug">{block.title}</h4>
            <ul className="space-y-1.5">
              {block.details.map((detail, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </MarqueeTrack>

      {/* Summary tagline — inside container */}
      <div className="container-custom mt-16">
        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Maîtriser les 7 modules ={' '}
              <span className="text-primary">expertise RH + Tech garantie</span>
            </p>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
};

export default PersonnelCostBenefits;
