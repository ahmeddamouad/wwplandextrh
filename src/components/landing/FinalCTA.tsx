import { ShimmerButton } from '@/components/ui/shimmer-button';
import { ArrowRight, Users, Zap, GraduationCap, Check } from 'lucide-react';

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

  const features = [
    'Formation + immersion + coaching CV',
    'Simulation d\'entretien + accompagnement insertion',
    'Suivi personnalisé tout au long du programme',
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Offre</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Prêt à transformer
              <br />
              <span className="text-primary">votre carrière RH ?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Le programme s&apos;adresse à ceux qui veulent devenir des praticiens RH opérationnels rapidement.
            </p>
          </div>

          {/* Target Audiences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targets.map((target, index) => (
              <div
                key={index}
                className="p-6 bg-background/50 rounded-lg border border-primary/20 space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <target.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">{target.text}</p>
              </div>
            ))}
          </div>

          {/* Premium Offer Card */}
          <div className="p-8 bg-primary/5 rounded-xl border border-primary/30 space-y-6 max-w-2xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Offre Premium</h3>
              <p className="text-muted-foreground">Inclut tout pour réussir votre transformation RH</p>
            </div>

            {/* Features List */}
            <ul className="space-y-3 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="pt-4 border-t border-primary/20">
              <p className="text-3xl font-bold text-primary">6 500 DH</p>
            </div>

            {/* CTA Button */}
            <ShimmerButton
              onClick={scrollToForm}
              background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
              shimmerColor="#ffffff"
              className="w-full text-base font-semibold flex items-center justify-center gap-2"
            >
              S&apos;inscrire au programme
              <ArrowRight className="w-5 h-5" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
