import ZigzagSection from './ZigzagSection';
import { AlertTriangle, TrendingDown, Clock, Users, BookMarked } from 'lucide-react';
import sectionImage from '@/assets/section2.png';

const PainPoints = () => {
  return (
    <ZigzagSection
      title="Pourquoi ce programme ? Le constat du marché"
      subtitle="Un marché RH en décalage : les formations restent trop théoriques, déconnectées des réalités opérationnelles."
      reverse={true}
      bgColor="linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F1F3 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Les tensions du marché RH" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <BookMarked className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Formations trop théoriques</p>
            <p className="text-sm text-muted-foreground">Peu ancrées dans la pratique réelle</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Users className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Profils sans expérience terrain</p>
            <p className="text-sm text-muted-foreground">À l&apos;embauche sans mise en pratique concrète</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Fossé entre formations et attentes</p>
            <p className="text-sm text-muted-foreground">Recruteurs en attente de candidats opérationnels</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Clock className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Temps d&apos;adaptation prolongé</p>
            <p className="text-sm text-muted-foreground">Entreprises attendent des candidats opérationnels immédiatement</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-xl border-2 border-primary/30 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Notre solution : <span className="text-primary">une expérience professionnelle structurée qui transforme les profils juniors en praticiens.</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PainPoints;
