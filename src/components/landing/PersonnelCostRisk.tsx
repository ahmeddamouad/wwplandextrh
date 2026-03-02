import ZigzagSection from './ZigzagSection';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';
import sectionImage from '@/assets/section3.png';

const PersonnelCostRisk = () => {
  return (
    <ZigzagSection
      title="La masse salariale doit être pilotée, pas subie."
      subtitle="Le salaire n'est que la partie visible : le coût réel peut atteindre 1,3 à 1,6 fois le brut une fois charges et coûts indirects intégrés."
      reverse={false}
      bgColor="linear-gradient(135deg, #FEF0E6 0%, #FDDAC1 50%, #FCC89B 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Masse salariale à piloter" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <DollarSign className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Charges sociales et primes mal optimisées</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Clock className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Heures supplémentaires non contrôlées</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <TrendingUp className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Turnover coûteux</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Users className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Mauvais recrutements</p>
          </div>
        </div>

        <div className="mt-2 p-4 bg-primary/10 rounded-xl border-2 border-primary/30 text-center">
          <p className="text-lg font-bold text-primary">
            +200.000 DH optimisés chez certains clients
          </p>
        </div>

        <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Une fois sécurisé et optimisé, le RH devient <span className="text-primary">un levier puissant.</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PersonnelCostRisk;
