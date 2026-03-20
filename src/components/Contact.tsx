const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Connect
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:theo.dinh214@gmail.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    theo.dinh214@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                  <a href="tel:+16176315337" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    +1 (617) 631-5337
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">LOCATION</h4>
                  <address className="text-xl not-italic">
                    Boston, MA
                  </address>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">CONNECT</h4>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/in/theo-dinh/" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">SKILLS</h4>
                <div className="flex flex-wrap gap-3">
                  {["Python", "Power BI", "Tableau", "RStudio", "Excel", "Financial Modeling", "Customs Valuation", "Real Estate"].map((skill) => (
                    <span key={skill} className="px-4 py-2 border border-border text-minimal">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-12 border-t border-border">
                <h4 className="text-minimal text-muted-foreground mb-4">LANGUAGES</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground">English — Professional</p>
                  <p className="text-muted-foreground">Vietnamese — Native</p>
                  <p className="text-muted-foreground">Chinese — Conversational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
