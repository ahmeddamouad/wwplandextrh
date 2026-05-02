import ZigzagSection from './ZigzagSection';
import { BookOpen, Users, Award, Target } from 'lucide-react';
import sectionImage from '@/assets/section3.png';

const PersonnelCostRisk = () => {
  return (
    <ZigzagSection
      title="Notre Positionnement : Une Expérience RH Terrain"
      subtitle="Le Programme RH Accéléré n&apos;est pas une formation classique. C&apos;est une expérience professionnelle structurée qui transforme des profils juniors en praticiens RH."
      reverse={false}
      bgColor="linear-gradient(135deg, #FEF0E6 0%, #FDDAC1 50%, #FCC89B 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Approche pratique du programme" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 justify-center lg:justify-start">
          <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Approche 100% Pratique</p>
            <p className="text-sm text-muted-foreground">Aucun contenu purement théorique — cas réels du terrain RH marocain</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 justify-center lg:justify-start">
          <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Immersion Professionnelle</p>
            <p className="text-sm text-muted-foreground">2 mois d&apos;intégration en entreprise partenaire avec missions authentiques</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 justify-center lg:justify-start">
          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Profils Opérationnels</p>
            <p className="text-sm text-muted-foreground">Capacité à gérer les fonctions RH essentielles en autonomie</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 justify-center lg:justify-start">
          <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Suivi Structuré</p>
            <p className="text-sm text-muted-foreground">Encadrement durant les missions en entreprise</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-xl border-2 border-primary/30 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            <span className="text-primary">Formation + Immersion = Transformation</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PersonnelCostRisk;
