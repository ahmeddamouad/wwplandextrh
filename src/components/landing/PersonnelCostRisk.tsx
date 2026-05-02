import { BookOpen, Users, Award, Target } from 'lucide-react';

const PersonnelCostRisk = () => {
  const features = [
    { icon: BookOpen, title: 'Approche 100% Pratique', desc: 'Aucun contenu purement théorique — cas réels du terrain RH marocain' },
    { icon: Users, title: 'Immersion Professionnelle', desc: '2 mois d\'intégration en entreprise partenaire avec missions authentiques' },
    { icon: Award, title: 'Profils Opérationnels', desc: 'Capacité à gérer les fonctions RH essentielles en autonomie' },
    { icon: Target, title: 'Suivi Structuré', desc: 'Encadrement durant les missions en entreprise' },
  ];

  return (
    <section className="py-20 md:py-32 bg-background w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Notre approche</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Notre Positionnement
              <br />
              <span className="text-primary">Une Expérience RH Terrain</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Le Programme RH Accéléré n&apos;est pas une formation classique. C&apos;est une expérience professionnelle structurée qui transforme des profils juniors en praticiens RH.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-primary/5 rounded-xl border border-primary/20 space-y-3 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transformation Message */}
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/30 space-y-2 max-w-2xl mx-auto">
            <p className="text-foreground font-semibold text-lg">
              Formation + Immersion = <span className="text-primary">Transformation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonnelCostRisk;
