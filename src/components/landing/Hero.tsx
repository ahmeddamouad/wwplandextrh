import { BookOpen, Users, Briefcase, Award, Target, ArrowRight } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const highlights = [
    { icon: BookOpen, text: 'Formation intensive 2 semaines' },
    { icon: Briefcase, text: 'Immersion en entreprise 2 mois' },
    { icon: Target, text: 'Approche 100% pratique' },
    { icon: Users, text: 'Profils opérationnels garantis' },
    { icon: Award, text: 'Certification professionnelle' },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Maroc 2026
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Maitrisez
              <br />
              <span className="text-primary">Programme RH Accéléré</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Une initiative ambitieuse pour former des profils RH immédiatement opérationnels — combinant formation intensive et immersion terrain dans les entreprises marocaines.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <ShimmerButton
              onClick={scrollToForm}
              background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
              shimmerColor="#ffffff"
              className="text-base font-semibold flex items-center justify-center gap-2 px-8 py-3"
            >
              S&apos;inscrire au programme
              <ArrowRight className="w-5 h-5" />
            </ShimmerButton>
            <button className="px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-colors font-semibold">
              En savoir plus
            </button>
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-primary/5 rounded-lg border border-primary/20 flex flex-col items-center text-center space-y-2"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <p className="text-xs sm:text-sm text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
