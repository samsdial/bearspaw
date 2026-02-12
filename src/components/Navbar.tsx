import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Brain,
  ChevronDown,
  Heart,
  Home,
  Leaf,
  Menu,
  Phone,
  Shield,
  Sparkles,
  TreePine,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const navMenus = [
  {
    name: "Our Philosophy",
    href: "/safety",
    isRoute: true,
    submenu: [
      {
        title: "Safety",
        description: "24/7 care and security protocols",
        href: "/safety",
        isRoute: true,
        icon: Shield,
      },
      {
        title: "Nature",
        description: "Healing gardens and nature-integrated spaces",
        href: "/nature",
        isRoute: true,
        icon: TreePine,
      },
      {
        title: "Legacy",
        description: "Honoring each resident's life story with dignity",
        href: "/legacy",
        isRoute: true,
        icon: Heart,
      },
    ],
  },
  {
    name: "Services",
    href: "/assisted-living",
    isRoute: true,
    submenu: [
      {
        title: "Assisted Living",
        description: "Personalized support while maintaining independence",
        href: "/assisted-living",
        isRoute: true,
        icon: Home,
      },
      {
        title: "Memory Care",
        description: "Specialized support for Alzheimer's and dementia",
        href: "/memory-care",
        isRoute: true,
        icon: Brain,
      },
      {
        title: "Wellness Programs",
        description: "Yoga, spa, art, and music therapy",
        href: "/wellness-programs",
        isRoute: true,
        icon: Activity,
      },
      {
        title: "Social Activities",
        description: "Community events and meaningful connections",
        href: "/social-activities",
        isRoute: true,
        icon: Users,
      },
    ],
  },
  {
    name: "Experience",
    href: "/testimonials",
    isRoute: true,
    submenu: [
      {
        title: "Testimonials",
        description: "What families say about us",
        href: "/testimonials",
        isRoute: true,
        icon: Sparkles,
      },
      {
        title: "Community Life",
        description: "Discover everyday life at Bearspaw",
        href: "/community-life",
        isRoute: true,
        icon: Leaf,
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    isRoute: true,
    submenu: null,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const handleDropdownEnter = (name: string) => setOpenDropdown(name);
  const handleDropdownLeave = () => setOpenDropdown(null);

  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

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
          <Link to="/" className="flex items-center gap-3">
            <div className="w-32 md:w-48 lg:w-64">
              <img
                src={logo}
                className="w-full h-auto"
                alt="Bears Paw - Seniors Living"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navMenus.map((menu) => (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() =>
                  menu.submenu && handleDropdownEnter(menu.name)
                }
                onMouseLeave={handleDropdownLeave}
              >
                {menu.submenu ? (
                  <span className="flex items-center gap-1.5 px-4 py-2 font-sans text-base text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer rounded-lg hover:bg-accent/50">
                    {menu.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === menu.name ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                ) : (
                  <Link
                    to={menu.href}
                    className="flex items-center gap-1.5 px-4 py-2 font-sans text-base text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer rounded-lg hover:bg-accent/50"
                  >
                    {menu.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {menu.submenu && openDropdown === menu.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    >
                      <div className="bg-popover border border-border rounded-2xl shadow-elevated p-3 min-w-[320px]">
                        <div className="space-y-1">
                          {menu.submenu.map((item) => {
                            const Icon = item.icon;
                            const content = (
                              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/60 transition-colors duration-200 group cursor-pointer">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <span className="font-sans font-medium text-sm text-foreground block">
                                    {item.title}
                                  </span>
                                  <span className="font-sans text-xs text-muted-foreground leading-snug block mt-0.5">
                                    {item.description}
                                  </span>
                                </div>
                              </div>
                            );

                            return item.isRoute ? (
                              <Link
                                key={item.title}
                                to={item.href}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {content}
                              </Link>
                            ) : (
                              <a
                                key={item.title}
                                href={item.href}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {content}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
            <Link to="/contact" className="btn-primary text-base py-3 px-6">
              Schedule a Tour
            </Link>
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
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-wide py-6 space-y-2">
              {navMenus.map((menu) => (
                <div key={menu.name}>
                  {menu.submenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(menu.name)}
                        className="flex items-center justify-between w-full font-sans text-lg text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg"
                      >
                        {menu.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileExpanded === menu.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === menu.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-2 pb-2 space-y-1">
                              {menu.submenu.map((item) => {
                                const Icon = item.icon;
                                const content = (
                                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/60 transition-colors">
                                    <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                                      <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                      <span className="font-sans font-medium text-sm text-foreground block">
                                        {item.title}
                                      </span>
                                      <span className="font-sans text-xs text-muted-foreground block">
                                        {item.description}
                                      </span>
                                    </div>
                                  </div>
                                );

                                return item.isRoute ? (
                                  <Link
                                    key={item.title}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {content}
                                  </Link>
                                ) : (
                                  <a
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {content}
                                  </a>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={menu.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-sans text-lg text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg"
                    >
                      {menu.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block text-center"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
