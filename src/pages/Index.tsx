import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import PersonnelCostRisk from '@/components/landing/PersonnelCostRisk';
import Differentiation from '@/components/landing/Differentiation';
import PersonnelCostBenefits from '@/components/landing/PersonnelCostBenefits';
import FinalCTA from '@/components/landing/FinalCTA';
import ContactFormSection from '@/components/landing/ContactFormSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Section 1: Hero - Externalisation RH */}
        <Hero />
        {/* Section 2: Le risque RH est financier */}
        <PainPoints />
        {/* Section 3: La masse salariale doit être pilotée */}
        <PersonnelCostRisk />
        {/* Section 4: Un RH structuré soutient la croissance */}
        <Differentiation />
        {/* Section 5: Externalisation RH complète et intégrée */}
        <PersonnelCostBenefits />
        {/* Section 6: Structurez votre fonction RH dès aujourd'hui */}
        <FinalCTA />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
