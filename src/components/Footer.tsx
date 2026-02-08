import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl font-semibold">BEARSPAW</h3>
            <p className="text-primary-foreground/70 font-sans max-w-md">
              A boutique senior living community where dignity, nature, and compassionate
              care come together to create an exceptional quality of life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#philosophy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-sans">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-sans">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-sans">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-sans">
                  Schedule a Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70 font-sans">
              <li>123 Bearspaw Road NW</li>
              <li>Calgary, AB T3L 2P5</li>
              <li>
                <a href="tel:+14035550123" className="hover:text-primary-foreground transition-colors">
                  (403) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:info@bearspawseniors.ca" className="hover:text-primary-foreground transition-colors">
                  info@bearspawseniors.ca
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 font-sans text-sm">
            © {currentYear} Bearspaw Seniors Living. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 font-sans text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Calgary by Idial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
