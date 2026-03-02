import ZigzagSection from './ZigzagSection';
import { AlertTriangle, TrendingDown, Clock, Scale, Search } from 'lucide-react';
import sectionImage from '@/assets/section2.png';

const PainPoints = () => {
  return (
    <ZigzagSection
      title="Le risque RH est financier avant d'être administratif."
      subtitle="Une erreur fiscale ou sociale impacte directement la trésorerie et la responsabilité du dirigeant."
      reverse={true}
      bgColor="linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F1F3 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Risques RH financiers" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Pénalités fiscales</p>
            <p className="text-sm text-muted-foreground">5 % à 20 % + intérêts cumulés</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Majorations CNSS</p>
            <p className="text-sm text-muted-foreground">3 % + 1 % par mois</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Clock className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Amendes par salarié en cas de non-conformité</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Scale className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Gestion disciplinaire mal cadrée = litiges</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Search className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Inspection du travail = exposition directe</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-xl border-2 border-primary/30 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Mais même sans sanction, un autre danger fragilise l'entreprise : <span className="text-primary">le coût mal maîtrisé.</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PainPoints;
