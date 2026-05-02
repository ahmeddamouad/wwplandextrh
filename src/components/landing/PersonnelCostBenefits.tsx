import { Users, DollarSign, AlertTriangle, BarChart3, MessageSquare } from 'lucide-react';

const PersonnelCostBenefits = () => {
  const blocks = [
    { 
      icon: Users, 
      number: '1',
      title: 'Recrutement',
      details: ['Analyse du besoin & fiche de poste', 'Conduite d\'entretien', 'Évaluation des candidats']
    },
    { 
      icon: BarChart3, 
      number: '2',
      title: 'Administration RH',
      details: ['Gestion des dossiers salariés', 'Contrats de travail', 'Obligations légales']
    },
    { 
      icon: DollarSign, 
      number: '3',
      title: 'Paie',
      details: ['Brut / Net & IR', 'Éléments variables', 'Contrôle des bulletins']
    },
    { 
      icon: AlertTriangle, 
      number: '4',
      title: 'Gestion Disciplinaire',
      details: ['Avertissement & recadrage', 'Procédure disciplinaire']
    },
    { 
      icon: MessageSquare, 
      number: '5',
      title: 'RH Opérationnelle',
      details: ['Gestion absences & retards', 'Communication managers']
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Contenu</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Contenu Pédagogique
              <br />
              <span className="text-primary">5 Blocs Opérationnels</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque bloc prépare à maîtriser une fonction RH essentielle avec des cas concrets du marché marocain.
            </p>
          </div>

          {/* Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="p-5 bg-primary/5 rounded-lg border border-primary/20 space-y-3 hover:border-primary/40 transition-colors"
              >
                {/* Block Number */}
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">{block.number}</span>
                </div>

                {/* Block Content */}
                <div>
                  <h4 className="font-bold text-foreground text-sm">{block.title}</h4>
                  <ul className="space-y-1 mt-2">
                    {block.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Message */}
          <div className="max-w-3xl mx-auto p-6 bg-primary/5 rounded-xl border border-primary/30 text-center">
            <p className="text-foreground font-semibold text-lg">
              Maîtriser les 5 blocs = <span className="text-primary">autonomie opérationnelle garantie</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonnelCostBenefits;
