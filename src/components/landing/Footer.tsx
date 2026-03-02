import { Linkedin, Facebook, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-16 border-t border-border w-full">
      <div className="container-custom w-full">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto w-full">
          {/* Logo & Description */}
          <div className="space-y-6">
            <img src={logo} alt="World Wide Progress" className="h-12" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Votre partenaire RH d'excellence pour transformer vos défis en opportunités de croissance.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/world-wide-progress"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/wwprogress/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Casablanca, Maroc<br />
                  Rabat, Maroc
                </span>
              </li>
              <li>
                <a
                  href="mailto:contact@wwpagency.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contact@wwpagency.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/world-wide-progress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connectez-vous avec nous
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} World Wide Progress. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
