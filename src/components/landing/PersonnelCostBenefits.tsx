import ZigzagSection from './ZigzagSection';
import { Users, DollarSign, AlertTriangle, BarChart3, MessageSquare } from 'lucide-react';
import sectionImage from '@/assets/section5.png';

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
    <ZigzagSection
      title="Contenu Pédagogique : 5 Blocs Opérationnels"
      subtitle="Chaque bloc prépare à maîtriser une fonction RH essentielle avec des cas concrets du marché marocain."
      reverse={false}
      bgColor="linear-gradient(135deg, #E6F3FF 0%, #B3D9FF 50%, #80BFFF 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="5 Blocs opérationnels du programme" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="p-4 bg-primary/5 rounded-xl border border-primary/20 justify-center lg:justify-start"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{block.number}</span>
              </div>
              <div className="text-left flex-1">
                <h4 className="font-bold text-foreground mb-2">{block.title}</h4>
                <ul className="space-y-1">
                  {block.details.map((detail, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4 p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            <span className="text-primary">Maîtriser les 5 blocs = autonomie opérationnelle garantie.</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PersonnelCostBenefits;
