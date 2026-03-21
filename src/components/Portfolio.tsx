import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const experiences = [
    {
      image: project1,
      title: "LEADVISORS CAPITAL GROUP",
      location: "HANOI, 2021–2024",
      description: "Spearheaded leasing and asset management for Grade A/B office buildings, increasing occupancy from 49% to 75.5% and securing $1.5M in additional annual rental revenue. Led cross-functional digitization projects saving 200+ hours annually."
    },
    {
      image: project2,
      title: "ERNST & YOUNG (EY)",
      location: "HANOI, 2025",
      description: "Conducted HS code classification, customs valuation, and origin determination for multinational clients. Prepared technical memos and advisory reports, streamlining compliance processes across Vietnamese and international regulations."
    },
    {
      image: project3,
      title: "HANOI BUFFALOES",
      location: "HANOI, 2023",
      description: "Established and managed the team's first youth training program, recruiting 20+ athletes and winning the U18 VBA 3x3 championship. Oversaw operations for 25+ players across 8 cities with 100% VBA compliance."
    }
  ];

  return (
    <section id="experience" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED EXPERIENCE</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              CAREER
            </h3>
          </div>
          
          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
