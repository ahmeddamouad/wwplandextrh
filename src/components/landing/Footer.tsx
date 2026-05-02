import { Linkedin, Facebook, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-16 border-t-2 border-primary/15 w-full">
      <div className="container-custom w-full">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto w-full">

          {/* Logo & Description */}
          <ScrollReveal direction="up" delay={0}>
            <div className="space-y-6">
              <img src={logo} alt="World Wide Progress" className="h-12" />
              <p className="text-sm leading-relaxed text-foreground/65 max-w-xs">
                Formation RH intensive qui transforme des profils juniors en praticiens opérationnels dans les entreprises marocaines.
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/company/world-wide-progress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/wwprogress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-6">
                Contact
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm text-foreground/65">
                    Casablanca, Maroc<br />
                    Rabat, Maroc
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:contact@wwpagency.com"
                    className="flex items-center gap-3 text-sm text-foreground/65 hover:text-primary transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    contact@wwpagency.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/world-wide-progress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-foreground/65 hover:text-primary transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    Connectez-vous avec nous
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

        </div>

        <div className="mt-16 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{' '}
            <span className="text-primary font-semibold">World Wide Progress</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
