import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Physics Engine Development",
      category: "University Project",
      description: "Custom physics engine built with C++ using advanced collision detection and rigid body dynamics for realistic game interactions.",
      technologies: ["C++", "DirectX 11", "Physics Simulation"],
      status: "Completed",
      featured: true
    },
    {
      title: "Graphics Shader Pipeline",
      category: "Personal Project", 
      description: "Modern rendering pipeline with advanced lighting, shadows, and post-processing effects using OpenGL and HLSL shaders.",
      technologies: ["OpenGL", "HLSL", "C++"],
      status: "In Progress",
      featured: true
    },
    {
      title: "Game Development Tools",
      category: "Tools",
      description: "Suite of utility tools for game developers including level editors, asset processors, and debugging utilities.",
      technologies: ["C#", "Unity", "ImGui"],
      status: "Completed",
      featured: false
    },
    {
      title: "Multiplayer Game Prototype",
      category: "University Project",
      description: "Real-time multiplayer game using custom networking protocols with client prediction and lag compensation.",
      technologies: ["Unity", "C#", "Networking"],
      status: "Completed", 
      featured: false
    },
    {
      title: "Procedural Terrain Generation",
      category: "Personal Project",
      description: "Advanced terrain generation system using noise functions, erosion simulation, and dynamic LOD for large-scale environments.",
      technologies: ["C++", "Unreal Engine", "HLSL"],
      status: "In Progress",
      featured: true
    },
    {
      title: "AI Behavior System",
      category: "University Project",
      description: "Flexible AI framework with state machines, behavior trees, and pathfinding for complex NPC interactions.",
      technologies: ["C++", "A* Algorithm", "Behavior Trees"],
      status: "Completed",
      featured: false
    }
  ];

  const categories = ["All", "University Projects", "Personal Projects", "Tools"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory.slice(0, -1));

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Explore my projects in game development, showcasing expertise in physics simulation, 
            graphics programming, and tool development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`bg-surface border-border hover:bg-surface-hover transition-smooth group cursor-pointer shadow-card hover:shadow-elevated animate-fade-in ${
                project.featured ? 'ring-1 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                    )}
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-primary mb-3 group-hover:text-primary-light transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <Button size="sm" variant="ghost" className="flex items-center gap-2 text-xs">
                    <Github className="w-3 h-3" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="flex items-center gap-2 text-xs">
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;