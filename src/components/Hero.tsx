import heroImage from "@/assets/hero-garden-02.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-sans text-sm font-medium text-accent-foreground">
                Alberta's Premier Boutique Senior Care
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="heading-xl">
              Dignity in <span className="text-primary">Every Detail</span>
            </h1>

            {/* Subheadline */}
            <p className="body-lg max-w-lg">
              Where nature-integrated care meets boutique hospitality.
              Experience a community designed for comfort, connection, and the
              highest quality of life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Schedule a Personal Tour
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#philosophy"
                className="btn-outline inline-flex items-center justify-center"
              >
                Learn Our Philosophy
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-semibold text-primary">
                  15+
                </p>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-primary">
                  98%
                </p>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  Family Satisfaction
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-primary">
                  24/7
                </p>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  Professional Care
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Beautiful garden courtyard at Bearspaw Seniors Living"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-background rounded-2xl p-6 shadow-card max-w-xs"
            >
              <p className="font-serif text-lg font-medium text-foreground mb-2">
                "A sanctuary of peace and dignity"
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                — Alberta Senior Care Association
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
