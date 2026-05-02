import { AlertTriangle, Clock, Users, BookMarked } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    { icon: BookMarked, title: 'Formations trop théoriques', desc: 'Peu ancrées dans la pratique réelle' },
    { icon: Users, title: 'Profils sans expérience terrain', desc: 'À l\'embauche sans mise en pratique concrète' },
    { icon: AlertTriangle, title: 'Fossé entre formations et attentes', desc: 'Recruteurs en attente de candidats opérationnels' },
    { icon: Clock, title: 'Temps d\'adaptation prolongé', desc: 'Entreprises attendent des candidats opérationnels immédiatement' },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Le marché</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Pourquoi ce programme ?
              <br />
              <span className="text-primary">Le constat du marché</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Un marché RH en décalage : les formations restent trop théoriques, déconnectées des réalités opérationnelles.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 bg-background/50 rounded-xl border border-primary/10 space-y-3 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <point.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground text-lg">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Message */}
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/30 space-y-3 max-w-2xl mx-auto">
            <p className="text-foreground font-semibold">Notre solution :</p>
            <p className="text-muted-foreground">
              Une expérience professionnelle structurée qui transforme les profils juniors en praticiens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
