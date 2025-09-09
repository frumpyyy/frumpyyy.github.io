import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import PortfolioSection from '@/components/PortfolioSection';
import nathanProfile from '@/assets/nathan-profile.jpg';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Gamepad2,
  Cpu,
  Palette,
  Send
} from 'lucide-react';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const skills = [
    { name: 'C++', level: 90, category: 'Languages' },
    { name: 'C#', level: 85, category: 'Languages' },
    { name: 'Java', level: 75, category: 'Languages' },
    { name: 'HTML/CSS', level: 80, category: 'Web' },
    { name: 'Unity', level: 90, category: 'Engines' },
    { name: 'Unreal Engine', level: 75, category: 'Engines' },
    { name: 'DirectX 11', level: 80, category: 'Graphics' },
    { name: 'OpenGL', level: 70, category: 'Graphics' },
    { name: 'SDL', level: 75, category: 'Frameworks' },
  ];

  const experiences = [
    {
      title: 'Mechanical Engineering Work Experience',
      company: 'Babcock at MOD Donnington',
      period: '2022',
      description: 'Gained valuable hands-on experience in engineering processes and technical problem-solving in a professional military environment.',
      type: 'work-experience'
    },
    {
      title: 'Sales Assistant',
      company: 'Primark Telford',
      period: '2021 - 2022',
      description: 'Developed strong customer service and communication skills while managing retail operations and customer interactions.',
      type: 'employment'
    },
    {
      title: 'Sales Assistant & Stock Replenishment',
      company: 'Home Bargains',
      period: '2020 - 2021',
      description: 'Enhanced organizational and time management skills through inventory management and customer service responsibilities.',
      type: 'employment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6">
                Nathan
                <span className="block text-accent">Moody</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed">
                Aspiring Game Programmer<br />
                <span className="text-primary">Physics & Graphics Enthusiast</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow-primary transition-smooth"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View Portfolio
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-primary p-1 shadow-elevated">
                  <div className="w-full h-full rounded-full overflow-hidden bg-surface">
                    <img 
                      src={nathanProfile} 
                      alt="Nathan Moody - Professional Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full animate-glow-pulse opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary rounded-full animate-glow-pulse opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  Hi, I'm Nathan. I'm currently studying Computer Games Programming (BSc) at 
                  Staffordshire University. I have a strong interest in physics development 
                  and graphical programming for games.
                </p>
                <p className="text-lg text-secondary leading-relaxed mb-8">
                  In my spare time, I enjoy creating small tool projects to aid game development, 
                  exploring advanced rendering techniques, and experimenting with physics simulations 
                  that push the boundaries of realistic game interactions.
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-secondary">Staffordshire, UK</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </div>
              
              <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <Card className="bg-surface-elevated border-border shadow-card p-8">
                  <h3 className="text-2xl font-display font-semibold text-primary mb-6">Education</h3>
                  
                  <div className="space-y-6">
                    <div className="relative pl-8 border-l-2 border-primary">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm text-accent font-medium">Current - Final Year</span>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-1">
                        BSc Computer Games Programming
                      </h4>
                      <p className="text-secondary">Staffordshire University</p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-border">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-surface border-2 border-border rounded-full"></div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted" />
                        <span className="text-sm text-muted font-medium">2020 - 2022</span>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-1">
                        A-Levels
                      </h4>
                      <p className="text-secondary mb-2">Shrewsbury College</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Electronics</Badge>
                        <Badge variant="outline">Economics</Badge>
                        <Badge variant="outline">Computer Science</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Experience
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Professional experience that has shaped my technical and interpersonal skills.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.title}
                  className="bg-surface border-border hover:bg-surface-hover transition-smooth shadow-card hover:shadow-elevated animate-fade-in group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-xl font-display font-semibold text-primary mb-1 group-hover:text-primary-light transition-smooth">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <p className="text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Expertise in game development technologies and programming languages.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { icon: Code, title: 'Languages', desc: 'C++, C#, Java' },
                { icon: Gamepad2, title: 'Game Engines', desc: 'Unity, Unreal' },
                { icon: Cpu, title: 'Graphics APIs', desc: 'DirectX, OpenGL' },
                { icon: Palette, title: 'Specialization', desc: 'Physics & Graphics' }
              ].map((item, index) => (
                <Card 
                  key={item.title}
                  className="bg-surface-elevated border-border text-center p-6 hover:bg-surface-hover transition-smooth shadow-card hover:shadow-elevated animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-accent transition-smooth" />
                  <h3 className="text-lg font-display font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary">{item.desc}</p>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {['Languages', 'Engines & Frameworks'].map((category, categoryIndex) => (
                <Card 
                  key={category}
                  className="bg-surface-elevated border-border p-8 shadow-card animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.3}s` }}
                >
                  <h3 className="text-xl font-display font-semibold text-primary mb-6">
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {skills
                      .filter(skill => 
                        (category === 'Languages' && skill.category === 'Languages') ||
                        (category === 'Engines & Frameworks' && ['Engines', 'Graphics', 'Frameworks', 'Web'].includes(skill.category))
                      )
                      .map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-secondary font-medium">{skill.name}</span>
                            <span className="text-primary font-semibold">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-surface"
                          />
                        </div>
                      ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Services
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              I specialize in game programming and am open to collaborating on projects 
              ranging from gameplay mechanics to physics and graphics systems.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Game Physics Development',
                  description: 'Custom physics engines, collision detection systems, and realistic simulations for enhanced gameplay experiences.',
                  features: ['Rigid Body Dynamics', 'Collision Detection', 'Particle Systems']
                },
                {
                  title: 'Graphics Programming',
                  description: 'Advanced rendering techniques, shader development, and optimization for stunning visual experiences.',
                  features: ['Custom Shaders', 'Lighting Systems', 'Post-Processing']
                },
                {
                  title: 'Gameplay Mechanics',
                  description: 'Core gameplay systems, AI behavior programming, and interactive game mechanics that engage players.',
                  features: ['AI Programming', 'State Machines', 'Player Controllers', 'Game Logic']
                },
                {
                  title: 'Development Tools',
                  description: 'Custom tools and utilities to streamline game development workflows and improve productivity.',
                  features: ['Level Editors', 'Asset Processing', 'Debug Tools', 'Pipeline Tools']
                }
              ].map((service, index) => (
                <Card 
                  key={service.title}
                  className="bg-surface border-border hover:bg-surface-hover transition-smooth shadow-card hover:shadow-elevated animate-fade-in group p-8"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-display font-semibold text-primary mb-4 group-hover:text-accent transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-secondary">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-secondary">
                Let's discuss your project or potential collaboration opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-slide-in">
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Let's Connect
                </h3>
                <p className="text-secondary mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborative projects, 
                  or simply chatting about game development and technology.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'nathan.moody@example.com', href: 'mailto:nathan.moody@example.com' },
                    { icon: Linkedin, label: 'LinkedIn', value: '/in/nathan-moody', href: 'https://linkedin.com/in/nathan-moody' },
                    { icon: Github, label: 'GitHub', value: '/nathanmoody', href: 'https://github.com/nathanmoody' }
                  ].map((contact) => (
                    <a 
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-surface-elevated border border-border hover:bg-surface-hover transition-smooth group"
                    >
                      <contact.icon className="w-5 h-5 text-primary group-hover:text-accent transition-smooth" />
                      <div>
                        <p className="text-primary font-medium">{contact.label}</p>
                        <p className="text-secondary">{contact.value}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted ml-auto group-hover:text-primary transition-smooth" />
                    </a>
                  ))}
                </div>
              </div>
              
              <Card className="bg-surface-elevated border-border shadow-card p-8 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-surface border-border focus:border-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-surface border-border focus:border-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-surface border-border focus:border-primary min-h-[120px]"
                      placeholder="Tell me about your project or how I can help..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-smooth group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-secondary">
            <p>&copy; 2024 Nathan Moody. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;