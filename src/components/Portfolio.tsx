import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
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

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web App' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Plateforme E-commerce',
      category: 'ecommerce',
      image: project1,
      description: 'Boutique en ligne moderne avec gestion avancée des commandes et paiements sécurisés.',
      longDescription: 'Une plateforme e-commerce complète développée avec React et Node.js, intégrant Stripe pour les paiements, un système de gestion des stocks en temps réel, et un dashboard administrateur avancé.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Application Mobile Fitness',
      category: 'mobile',
      image: project2,
      description: 'App mobile pour le suivi des entraînements avec interface intuitive et animations fluides.',
      longDescription: 'Application mobile cross-platform développée avec React Native, permettant le suivi des exercices, la planification d\'entraînements personnalisés, et l\'intégration avec des wearables.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Charts.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 3,
      title: 'Dashboard Corporate',
      category: 'web',
      image: project3,
      description: 'Interface d\'administration moderne avec visualisations de données et analytics avancées.',
      longDescription: 'Dashboard corporate développé avec React et TypeScript, offrant des visualisations de données interactives, un système de notifications en temps réel, et une gestion avancée des utilisateurs.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 4,
      title: 'Site Web Restaurant',
      category: 'web',
      image: project1,
      description: 'Site vitrine élégant avec système de réservation et menu interactif.',
      longDescription: 'Site web restaurant avec design moderne, système de réservation en ligne, menu interactif, galerie photos, et intégration avec les réseaux sociaux.',
      technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Strapi', 'MySQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 5,
      title: 'App de Livraison',
      category: 'mobile',
      image: project2,
      description: 'Application de livraison avec géolocalisation et suivi en temps réel.',
      longDescription: 'Application de livraison complète avec géolocalisation, suivi des commandes en temps réel, système de notation, et intégration avec les services de paiement mobile.',
      technologies: ['React Native', 'Google Maps', 'Socket.io', 'Express', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 6,
      title: 'Marketplace Digital',
      category: 'ecommerce',
      image: project3,
      description: 'Marketplace multi-vendeurs avec système de commission et analytics.',
      longDescription: 'Plateforme marketplace permettant à plusieurs vendeurs de proposer leurs produits, avec système de commission automatisé, analytics avancées, et gestion des litiges.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe Connect', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={sectionRef} id="portfolio" className="section-padding bg-gradient-to-br from-muted/20 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 observe-animation">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Mon <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez une sélection de mes projets récents, chacun reflétant mon engagement 
            pour la qualité et l'innovation technologique.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-accent text-accent-foreground shadow-neon/30'
                    : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="observe-animation group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-modern overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-neon/20">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <ExternalLink size={16} className="text-accent-foreground" />
                      </div>
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Github size={16} className="text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <div className="card-modern max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="btn-neon flex items-center">
                    <ExternalLink className="mr-2" size={20} />
                    Voir le projet
                  </button>
                  <button className="btn-outline-neon flex items-center">
                    <Github className="mr-2" size={20} />
                    Code source
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;