import ZigzagSection from './ZigzagSection';
import { BookOpen, Briefcase, Clock, Users } from 'lucide-react';
import sectionImage from '@/assets/section4.png';

const Differentiation = () => {
  return (
    <ZigzagSection
      title="Structure du Programme en 2 Phases"
      subtitle="Une architecture en deux temps garantit une montée en compétences rapide avant une mise en situation professionnelle réelle."
      reverse={true}
      bgColor="linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F1F3 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Structure du programme" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-6">
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <div className="space-y-4">
            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground mb-1">Phase 1 : Formation intensive</h4>
                <p className="text-sm text-muted-foreground">2 semaines</p>
              </div>
            </div>
            
            <div className="border-l-2 border-primary/30 pl-4 ml-5">
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Format accéléré et orienté pratique
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <div className="space-y-4">
            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground mb-1">Phase 2 : Immersion en entreprise</h4>
                <p className="text-sm text-muted-foreground">2 mois</p>
              </div>
            </div>
            
            <div className="border-l-2 border-primary/30 pl-4 ml-5">
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Missions RH réelles avec suivi structuré
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            <span className="text-primary">La formation prépare, l&apos;immersion confirme et consolide.</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default Differentiation;
