import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'CEO, TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'Un développeur exceptionnel ! Il a transformé notre vision en une application web magnifique et performante. Sa maîtrise technique et son attention aux détails sont remarquables.',
      rating: 5
    },
    {
      id: 2,
      name: 'Pierre Martin',
      role: 'Directeur Marketing, InnovateCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Collaboration exceptionnelle du début à la fin. Il a su comprendre nos besoins et livrer une solution qui dépasse nos attentes. Je recommande vivement ses services.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      role: 'Fondatrice, CreativeStudio',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Travail de qualité professionnelle avec un souci du détail impressionnant. Notre nouveau site web a considérablement amélioré notre présence en ligne et nos conversions.',
      rating: 5
    },
    {
      id: 4,
      name: 'Thomas Chen',
      role: 'CTO, DataFlow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Expert technique avec une excellente communication. Il a développé notre plateforme avec une architecture solide et scalable. Résultats au-delà de nos espérances.',
      rating: 5
    },
    {
      id: 5,
      name: 'Amélie Rousseau',
      role: 'Directrice E-commerce, StyleHub',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      content: 'Notre boutique en ligne a été entièrement transformée. Interface moderne, performance optimale et fonctionnalités avancées. Un investissement qui porte déjà ses fruits.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 observe-animation">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ce que disent mes <span className="text-gradient">clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction de mes clients est ma priorité absolue. Découvrez leurs retours 
            sur nos collaborations et les résultats obtenus.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto observe-animation">
          <div className="card-modern p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-neon"></div>
            
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 fill-accent text-accent mr-1" 
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl lg:text-2xl leading-relaxed text-foreground mb-8 font-light">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-accent/30"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300 hover:text-accent-foreground"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-accent' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300 hover:text-accent-foreground"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 observe-animation">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">30+</div>
            <div className="text-muted-foreground">Projets livrés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5⭐</div>
            <div className="text-muted-foreground">Note moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;