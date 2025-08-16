import { useEffect, useRef } from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  Zap 
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.observe-animation');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Applications web modernes avec React, Vue.js, et les dernières technologies front-end.',
      features: ['React/Vue.js', 'TypeScript', 'Responsive Design', 'PWA']
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Applications natives et hybrides pour iOS et Android avec React Native.',
      features: ['React Native', 'Cross-platform', 'App Store', 'Performance']
    },
    {
      icon: Database,
      title: 'Backend & API',
      description: 'Services backend robustes avec Node.js, bases de données, et APIs RESTful.',
      features: ['Node.js', 'MongoDB/SQL', 'REST/GraphQL', 'Cloud Deploy']
    },
    {
      icon: Globe,
      title: 'Sites E-commerce',
      description: 'Boutiques en ligne complètes avec systèmes de paiement et gestion avancée.',
      features: ['Shopify/WooCommerce', 'Paiements', 'Inventory', 'Analytics']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Conception d\'interfaces utilisateur intuitives et expériences utilisateur optimales.',
      features: ['Figma/Adobe XD', 'Prototyping', 'User Research', 'Design System']
    },
    {
      icon: Zap,
      title: 'Optimisation',
      description: 'Amélioration des performances, SEO, et optimisation pour les moteurs de recherche.',
      features: ['Performance', 'SEO', 'Core Web Vitals', 'Accessibility']
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 observe-animation">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Mes <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Je propose une gamme complète de services de développement web pour transformer 
            vos idées en solutions digitales performantes et innovantes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="observe-animation group card-modern p-8 hover:scale-105 transition-all duration-300 hover:shadow-neon/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-neon rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex}
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-neon/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 observe-animation">
          <p className="text-lg text-muted-foreground mb-6">
            Prêt à donner vie à votre projet ?
          </p>
          <button className="btn-neon">
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;