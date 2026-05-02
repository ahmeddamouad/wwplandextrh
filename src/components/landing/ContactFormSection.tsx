import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { trackLead } from '@/lib/metaPixel';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
};

const ContactFormSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        timestamp: new Date().toISOString()
      };

      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new Error('Webhook URL not configured');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`);
      }

      // Track lead conversion with Meta Pixel
      trackLead();

      // Redirect to thank you page
      navigate('/merci');
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Erreur',
        description: 'Une erreur s\'est produite. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="pt-40 pb-32 sm:pt-40 sm:pb-24 min-h-screen"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, hsl(172 70% 39% / 0.06) 0%, hsl(var(--background)) 70%)',
      }}
    >
      <div className="container-custom">

        {/* Section heading */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Inscription</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Rejoignez le
              <br />
              <span className="text-primary">Programme RH Accéléré</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ease: EASING.smooth, duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-[0_8px_40px_-12px_hsl(172_70%_39%_/_0.12)] ring-1 ring-primary/10 will-change-[opacity,transform]"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: EASING.smooth, duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 will-change-[opacity,transform]"
                style={{ transform: 'translate3d(0, 0, 0)' }}
              >
                <div className="field-group space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium transition-colors duration-200">
                    Nom complet<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                    className="bg-background border-border focus-visible:ring-primary/30"
                  />
                </div>
                <div className="field-group space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium transition-colors duration-200">
                    Adresse e-mail<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="bg-background border-border focus-visible:ring-primary/30"
                  />
                </div>
              </motion.div>

              {/* Row 2 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: EASING.smooth, duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 will-change-[opacity,transform]"
                style={{ transform: 'translate3d(0, 0, 0)' }}
              >
                <div className="field-group space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium transition-colors duration-200">
                    Entreprise
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="bg-background border-border focus-visible:ring-primary/30"
                  />
                </div>
                <div className="field-group space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium transition-colors duration-200">
                    Téléphone<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+212 600 000 000"
                    className="bg-background border-border focus-visible:ring-primary/30"
                  />
                </div>
              </motion.div>

              {/* Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: EASING.smooth, duration: 0.5, delay: 0.25 }}
                className="field-group space-y-2 will-change-[opacity,transform]"
                style={{ transform: 'translate3d(0, 0, 0)' }}
              >
                <Label htmlFor="message" className="text-foreground font-medium transition-colors duration-200">
                  Parlez-nous de vous<span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre profil, vos objectifs, votre expérience actuelle..."
                  className="bg-background border-border min-h-[120px] focus-visible:ring-primary/30"
                />
              </motion.div>

              {/* Submit button with animated state */}
              <ShimmerButton
                type="submit"
                background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
                shimmerColor="#ffffff"
                className="w-full text-base font-semibold"
                disabled={isSubmitting}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ ease: EASING.smooth, duration: 0.15 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ ease: EASING.smooth, duration: 0.15 }}
                    >
                      Soumettre ma candidature
                    </motion.span>
                  )}
                </AnimatePresence>
              </ShimmerButton>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
