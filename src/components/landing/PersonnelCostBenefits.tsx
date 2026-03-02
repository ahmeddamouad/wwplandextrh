import ZigzagSection from './ZigzagSection';
import { Users, Scale, Shield, Settings } from 'lucide-react';
import sectionImage from '@/assets/section5.png';

const PersonnelCostBenefits = () => {
  const services = [
    { icon: Users, title: 'Recrutement inclus' },
    { icon: Scale, title: 'Gestion disciplinaire et conflits' },
    { icon: Shield, title: 'Audit social' },
    { icon: Settings, title: 'Mise en place de process RH' },
  ];

  return (
    <ZigzagSection
      title="Externalisation RH complète et intégrée."
      subtitle="Un partenaire unique pour traiter risque, coût et performance simultanément."
      reverse={false}
      bgColor="linear-gradient(135deg, #E6F3FF 0%, #B3D9FF 50%, #80BFFF 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Externalisation RH complète" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20 justify-center lg:justify-start"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-semibold text-foreground text-left">{item.title}</p>
          </div>
        ))}

        <div className="mt-2 p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            La question n'est plus si vous devez structurer votre RH, mais <span className="text-primary">quand.</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PersonnelCostBenefits;
