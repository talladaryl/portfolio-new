import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    'Développement Web',
    'Applications Mobile',
    'UI/UX Design',
    'E-commerce',
    'Consulting'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 border-t border-border/50">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-gradient mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Développeur Full Stack passionné, je transforme vos idées en solutions 
              digitales performantes et innovantes. Contactez-moi pour donner vie à vos projets.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@monportfolio.com"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                contact@monportfolio.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-muted-foreground">
              <span>© 2024 Portfolio. Créé avec</span>
              <Heart className="w-4 h-4 mx-1 text-accent" />
              <span>et beaucoup de café</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-accent transition-colors duration-300">
                Mentions légales
              </button>
              <button className="hover:text-accent transition-colors duration-300">
                Politique de confidentialité
              </button>
              <button className="hover:text-accent transition-colors duration-300">
                CGV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        style={{ boxShadow: '0 4px 20px rgba(74, 222, 128, 0.3)' }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;