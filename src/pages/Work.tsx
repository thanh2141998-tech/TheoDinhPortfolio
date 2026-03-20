import { useState } from "react";
import Navigation from "@/components/Navigation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const experiences = [
    {
      image: project1,
      title: "LEADVISORS CAPITAL GROUP",
      location: "HANOI, 2021–2024",
      category: "REAL ESTATE",
      description: "Spearheaded leasing and asset management for Grade A/B office buildings, increasing occupancy from 49% to 75.5% and securing $1.5M in additional annual rental revenue.",
      role: "OPERATIONS & LEASING EXEC",
      year: "2021–2024"
    },
    {
      image: project2,
      title: "ERNST & YOUNG (EY)",
      location: "HANOI, 2025",
      category: "FINANCE & CONSULTING",
      description: "Conducted HS code classification, customs valuation analysis, and origin determination for multinational clients, ensuring compliance with Vietnamese and international regulations.",
      role: "CUSTOMS & TRADE INTERN",
      year: "2025"
    },
    {
      image: project3,
      title: "HANOI BUFFALOES",
      location: "HANOI, 2023",
      category: "SPORTS",
      description: "Established the team's first youth training program, recruiting 20+ athletes and winning the U18 VBA 3x3 championship. Managed operations across 8 cities.",
      role: "TEAM MANAGER",
      year: "2023"
    },
    {
      image: project2,
      title: "UHY AUDITING & CONSULTING",
      location: "HANOI, 2020",
      category: "FINANCE & CONSULTING",
      description: "Participated in audits for 10+ clients across manufacturing, retail, and real estate sectors, identifying discrepancies worth $250K and improving compliance.",
      role: "AUDITING INTERN",
      year: "2020"
    }
  ];

  const categories = ["ALL", "REAL ESTATE", "FINANCE & CONSULTING", "SPORTS"];

  const filteredExperiences = activeCategory === "ALL" 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                EXPERIENCE
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A journey across finance, real estate, consulting, and sports management — 
                each role sharpening analytical and leadership skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCategory === category 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredExperiences.map((exp, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img 
                      src={exp.image} 
                      alt={exp.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">
                        {exp.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {exp.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">ROLE</p>
                        <p className="text-foreground text-sm">{exp.role}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">YEAR</p>
                        <p className="text-foreground">{exp.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Interested in
              <br />
              Working Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how I can contribute to your team
            </p>
            <a 
              href="/contact" 
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
