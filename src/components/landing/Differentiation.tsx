import { BookOpen, Briefcase } from 'lucide-react';

const Differentiation = () => {
  const phases = [
    {
      icon: BookOpen,
      phase: '1',
      title: 'Formation intensive',
      duration: '2 semaines',
      details: ['Format accéléré et orienté pratique', 'Apprentissage des 5 blocs opérationnels', 'Cas concrets du marché marocain'],
    },
    {
      icon: Briefcase,
      phase: '2',
      title: 'Immersion en entreprise',
      duration: '2 mois',
      details: ['Missions RH réelles avec suivi structuré', 'Intégration en entreprise partenaire', 'Mise en pratique des compétences'],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Programme</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Structure du Programme
              <br />
              <span className="text-primary">en 2 Phases</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Une architecture en deux temps garantit une montée en compétences rapide avant une mise en situation professionnelle réelle.
            </p>
          </div>

          {/* Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="p-6 bg-background/50 rounded-xl border border-primary/20 space-y-4"
              >
                {/* Phase Number */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{phase.phase}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-foreground text-lg">{phase.title}</h3>
                    <p className="text-sm text-primary font-semibold">{phase.duration}</p>
                  </div>
                </div>

                {/* Phase Details */}
                <ul className="space-y-2 pt-2">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/30 space-y-2 max-w-2xl mx-auto">
            <p className="text-foreground font-semibold text-lg">
              La formation prépare, l&apos;immersion <span className="text-primary">confirme et consolide</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
