import { useEffect, useRef } from 'react';
import { Code, Users, Award, Coffee } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
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

  const stats = [
    { icon: Code, value: '5+', label: 'Années d\'expérience' },
    { icon: Users, value: '50+', label: 'Projets réalisés' },
    { icon: Award, value: '30+', label: 'Clients satisfaits' },
    { icon: Coffee, value: '1000+', label: 'Cafés bus' },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gradient-to-br from-background to-muted/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="observe-animation">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-neon rounded-2xl blur-xl opacity-30 animate-glow"></div>
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-full h-auto rounded-2xl card-modern z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="observe-animation">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              À propos de <span className="text-gradient">moi</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Développeur Full Stack passionné avec plus de 5 ans d'expérience dans la création 
                d'applications web modernes et performantes. Je me spécialise dans les technologies 
                React, Node.js, et les solutions cloud.
              </p>
              
              <p className="text-lg">
                Mon approche combine créativité technique et vision business pour livrer des solutions 
                qui dépassent les attentes. J'aime transformer les idées complexes en expériences 
                utilisateur intuitives et élégantes.
              </p>
              
              <p className="text-lg">
                Toujours à l'affût des dernières innovations, je m'efforce de rester à la pointe 
                de la technologie pour offrir les meilleures solutions à mes clients.
              </p>
            </div>

            <div className="mt-8">
              <button className="btn-neon">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="observe-animation text-center p-6 card-modern hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;