import logo from "@/assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Our Philosophy", href: "#philosophy" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            {/* <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              BEARSPAW
            </span>
            <span className="hidden sm:block text-sm text-muted-foreground font-sans">
              Seniors Living
            </span> */}
            <img src={logo} alt="Logo" className="h-[45px] md:h-16 lg:h-20" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-base text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-sans text-sm">(403) 555-0123</span>
            </a>
            <a href="#contact" className="btn-primary text-base py-3 px-6">
              Schedule a Tour
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-wide py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-sans text-lg text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block text-center"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
