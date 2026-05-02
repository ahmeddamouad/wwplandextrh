import { Users, DollarSign, AlertTriangle, BarChart3, MessageSquare, TrendingUp, Zap } from 'lucide-react';

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
    { 
      icon: TrendingUp, 
      number: '6',
      title: 'Dashboard BI',
      details: ['Power BI & Analytics', 'Tableaux de bord RH', 'Insights data-driven']
    },
    { 
      icon: Zap, 
      number: '7',
      title: 'Intelligence Artificielle',
      details: ['Automatisation des process RH', 'Analyse prédictive', 'Optimisation des tâches']
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
              <span className="text-primary">7 Modules Complets</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Maîtrisez les fonctions RH essentielles + Power BI + Intelligence Artificielle pour accélérer vos process RH.
            </p>
          </div>

          {/* Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
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
              Maîtriser les 7 modules = <span className="text-primary">expertise RH + Tech garantie</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonnelCostBenefits;
