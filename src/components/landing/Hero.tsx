import { BookOpen, Users, Briefcase, Award, Target, ArrowRight, ArrowDown } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import heroImage from '@/assets/section1.png';

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
    <section className="relative lg:min-h-screen flex items-start lg:items-center bg-gradient-to-br from-secondary via-background to-primary/5 pt-20 md:pt-32 pb-12 md:pb-16 w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up w-full max-w-full order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-full text-primary font-medium text-xs sm:text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Maroc 2026
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground break-words">
              Programme RH Accéléré{' '}
              <span className="text-primary">+ Immersion en Entreprise.</span>
            </h1>

            <p className="body-lg text-muted-foreground">
              Une initiative ambitieuse pour former des profils RH immédiatement opérationnels — combinant formation intensive et immersion terrain dans les entreprises marocaines.
            </p>

            <ul className="space-y-3 sm:space-y-4 w-full max-w-full">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 animate-fade-in w-full justify-center lg:justify-start"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <span className={`icon-wrapper flex-shrink-0 ${
                    index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </span>
                  <span className="body-md text-foreground text-left">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <ShimmerButton
              onClick={scrollToForm}
              background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
              shimmerColor="#ffffff"
              className="w-full sm:w-auto text-base font-semibold flex items-center justify-center gap-2"
            >
              S&apos;inscrire au programme
              <ArrowRight className="w-5 h-5" />
            </ShimmerButton>

            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              Découvrez pourquoi ce programme est une transformation.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in delay-200 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Programme RH Accéléré" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
