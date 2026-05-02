import { BookOpen, Users, Award, Target } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PersonnelCostRisk = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Approche 100% Pratique',
      desc: 'Aucun contenu purement théorique — cas réels du terrain RH marocain, scénarios concrets et mises en situation professionnelles.',
    },
    {
      icon: Users,
      title: 'Immersion Professionnelle',
      desc: '2 mois d\'intégration en entreprise partenaire avec missions authentiques, accompagnement structuré et feedback continu.',
    },
    {
      icon: Award,
      title: 'Profils Opérationnels',
      desc: 'Capacité à gérer les fonctions RH essentielles en autonomie complète dès le premier jour en poste.',
    },
    {
      icon: Target,
      title: 'Suivi Structuré',
      desc: 'Encadrement personnalisé durant les missions en entreprise avec des points réguliers et un coaching ciblé.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="space-y-8">

          {/* Section Header — centered for visual variety against adjacent left-aligned sections */}
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <p className="eyebrow mb-3">Notre approche</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Notre Positionnement
                <br />
                <span className="text-primary">Une Expérience RH Terrain</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Le Programme RH Accéléré n&apos;est pas une formation classique. C&apos;est une expérience professionnelle structurée qui transforme des profils juniors en praticiens RH.
              </p>
            </div>
          </ScrollReveal>

          {/* Zigzag feature rows */}
          <div className="divide-y divide-border/40">
            {features.map((feature, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center">
                    <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="md:w-2/3 space-y-3 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Transformation statement — large typographic */}
          <ScrollReveal delay={0.2}>
            <div className="pt-8 border-t border-primary/15 text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                Formation + Immersion ={' '}
                <span className="text-primary">Transformation</span>
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default PersonnelCostRisk;
