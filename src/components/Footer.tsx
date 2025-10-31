const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">IE</span>
              </div>
              <span className="text-xl font-bold">IrriTech</span>
            </div>
            <p className="text-primary-foreground/80 max-w-sm">
              Engineering sustainable irrigation solutions for a water-conscious future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-primary-foreground transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+1 (555) 123-4567</li>
              <li>info@irritech-engineering.com</li>
              <li>123 Agricultural Way, Sacramento, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© 2024 IrriTech Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
