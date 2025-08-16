import { ArrowDown, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const circles = [
    { className: "top-20 left-20 w-72 h-72 bg-accent/10 blur-3xl", delay: "0s" },
    { className: "bottom-20 right-20 w-96 h-96 bg-neon/10 blur-3xl", delay: "2s" },
    { className: "top-1/2 left-1/3 w-48 h-48 bg-accent/20 blur-2xl", delay: "4s" },
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(22,25,35,0.85), rgba(22,25,35,0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {circles.map((c, i) => (
          <div 
            key={i}
            className={`absolute rounded-full animate-float ${c.className}`}
            style={{ animationDelay: c.delay }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Développeur</span>
          <br />
          <span className="text-gradient animate-glow">
            <Typewriter
              words={['Full Stack', 'React', 'Node.js', 'UI/UX']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Passionné par la création d'expériences web modernes et innovantes. 
          Spécialisé en React, Node.js et design UI/UX.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button onClick={scrollToNext} className="btn-neon group" aria-label="Aller à la section suivante">
            Découvrir mon travail
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
          
          <a href="/cv.pdf" download className="btn-outline-neon group flex items-center" aria-label="Télécharger mon CV">
            <Download className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
            Télécharger CV
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
