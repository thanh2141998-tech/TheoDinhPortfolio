
const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Building Bridges Between Data & Decisions
              </h3>
              
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm an MBA candidate at Brandeis International Business School (STEM-designated) 
                  with concentrations in Finance and Data Analytics, maintaining a 3.72 GPA. 
                  My background spans auditing in Vietnam, commercial real estate management, 
                  customs consulting at EY, and professional basketball operations.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I bring a rare combination of analytical rigor and operational leadership — 
                  from increasing building occupancy by 26.5 percentage points to managing 
                  logistics for a professional sports team across 8 cities. I thrive at the 
                  intersection of finance, technology, and human connection.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">EDUCATION</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-1">Brandeis University</h5>
                    <p className="text-muted-foreground">MBA — Finance & Data Analytics</p>
                    <p className="text-minimal text-muted-foreground mt-1">2024 – 2026 · GPA 3.72</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-1">Academy of Finance</h5>
                    <p className="text-muted-foreground">Bachelor of Accounting — Audit</p>
                    <p className="text-minimal text-muted-foreground mt-1">2016 – 2021 · Hanoi, Vietnam</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">GPA</h4>
                    <p className="text-xl">3.72</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">LANGUAGES</h4>
                    <p className="text-xl">3</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">COUNTRIES</h4>
                    <p className="text-xl">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-32">
            <h2 className="text-minimal text-muted-foreground mb-12">BEYOND THE RÉSUMÉ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden">
                <img 
                  src={photoRobHale} 
                  alt="Theo Dinh with Rob Hale, part owner of the Boston Celtics"
                  className="w-full h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">With Rob Hale — Part Owner, Boston Celtics</p>
                </div>
              </div>
              <div className="group relative overflow-hidden">
                <img 
                  src={photoTatum} 
                  alt="Theo Dinh with Jayson Tatum"
                  className="w-full h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">With Jayson Tatum — NBA All-Star, Boston Celtics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
