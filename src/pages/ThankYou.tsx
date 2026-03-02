import { MessageCircle } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const ThankYou = () => {
  const whatsappNumber = "+212700000660"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Bonjour, je viens de soumettre une demande via votre site.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-primary/5 p-4">
      <div className="relative bg-gradient-to-br from-white via-primary/5 to-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center border border-primary/20 backdrop-blur-sm overflow-hidden max-w-md w-full">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Votre message a bien été reçu !
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Notre équipe vous répondra rapidement .
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
              shimmerColor="#ffffff"
              className="w-full h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Nous contacter sur WhatsApp
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
