import ZigzagSection from './ZigzagSection';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { ArrowRight, Users, Zap, GraduationCap } from 'lucide-react';
import sectionImage from '@/assets/section6.png';

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const targets = [
    { icon: GraduationCap, text: 'Jeunes diplômés en Ressources Humaines' },
    { icon: Zap, text: 'Profils en reconversion professionnelle' },
    { icon: Users, text: 'Assistants RH souhaitant se structurer' },
  ];

  return (
    <ZigzagSection
      id="contact"
      title="Nos Publics Cibles et Offres"
      subtitle="Le programme s&apos;adresse à ceux qui veulent devenir des praticiens RH opérationnels rapidement."
      reverse={false}
      bgColor="linear-gradient(135deg, #FEF0E6 0%, #FDDAC1 50%, #FCC89B 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Programme pour les professionnels RH" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-bold text-foreground text-center lg:text-left">Cibles principales :</h3>
          {targets.map((target, index) => (
            <div key={index} className="flex items-center gap-3 text-muted-foreground justify-center lg:justify-start">
              <target.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{target.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <h3 className="font-bold text-foreground mb-4 text-center lg:text-left">Offre Premium</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Formation + immersion + coaching CV</span>
            </div>
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Simulation d&apos;entretien + accompagnement insertion</span>
            </div>
            <div className="pt-3 border-t border-primary/20">
              <p className="text-lg font-bold text-primary text-center">6 500 DH</p>
            </div>
          </div>
        </div>

        <ShimmerButton
          onClick={scrollToForm}
          background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
          shimmerColor="#ffffff"
          className="w-full sm:w-auto text-sm sm:text-base font-semibold flex items-center justify-center gap-2 px-4 py-3"
        >
          <span className="text-center">S&apos;inscrire au programme</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        </ShimmerButton>
      </div>
    </ZigzagSection>
  );
};

export default FinalCTA;
