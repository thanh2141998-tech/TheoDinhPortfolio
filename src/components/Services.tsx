const Services = () => {
  const expertise = [
    {
      number: "01",
      title: "FINANCE & CONSULTING",
      description: "Corporate finance, customs valuation, HS code classification, post-clearance audit, and strategic advisory for multinational clients"
    },
    {
      number: "02", 
      title: "REAL ESTATE & ASSET MANAGEMENT",
      description: "Commercial leasing strategy, portfolio optimization, occupancy growth from 49% to 75.5%, and $1.5M+ in additional annual revenue"
    },
    {
      number: "03",
      title: "DATA ANALYTICS & AI",
      description: "Python, Power BI, Tableau, RStudio — transforming complex datasets into actionable insights for data-driven decision-making"
    },
    {
      number: "04",
      title: "OPERATIONS & LEADERSHIP",
      description: "Cross-functional process improvement, digitized workflows, team management, and sports operations across professional organizations"
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">EXPERTISE</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What I Do
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {expertise.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
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

export default Services;
