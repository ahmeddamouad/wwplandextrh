import ZigzagSection from './ZigzagSection';
import { Check, TrendingUp } from 'lucide-react';
import sectionImage from '@/assets/section4.png';

const Differentiation = () => {
  return (
    <ZigzagSection
      title="Un RH structuré soutient la croissance."
      subtitle="Savez-vous que les entreprises qui recrutent efficacement ont jusqu'à 3 fois plus de croissance du chiffre d'affaires que celles qui recrutent mal ? Et évitent énormément de coûts grâce à un faible turnover."
      reverse={true}
      bgColor="linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F1F3 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="RH structuré pour la croissance" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-6">
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 justify-center lg:justify-start">
            <TrendingUp className="w-5 h-5 text-primary" />
            Et c'est possible pour vous aussi avec :
          </h3>
          <ul className="space-y-2 lg:ml-7">
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Process RH reproductibles</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Intégration rapide des collaborateurs</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Climat social stabilisé</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Alignement RH / stratégie</span>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Pour obtenir ces trois résultats, il faut <span className="text-primary">une prise en charge globale.</span>
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default Differentiation;
