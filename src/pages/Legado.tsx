import wellnessRoom from "@/assets/assisted-living-03.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Camera,
  Heart,
  Music,
  Palette,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Life Stories",
    description:
      "Each resident has a unique story. We document and celebrate their memories, achievements, and life experiences with care.",
  },
  {
    icon: Camera,
    title: "Memory Albums",
    description:
      "We create personalized photo albums that capture special moments and celebrations in our community.",
  },
  {
    icon: Music,
    title: "Musical Traditions",
    description:
      "Music from each generation fills our spaces, helping residents reconnect with treasured memories.",
  },
  {
    icon: Palette,
    title: "Art and Expression",
    description:
      "Art workshops where residents can express themselves creatively and leave a personal artistic legacy.",
  },
  {
    icon: Heart,
    title: "Family Connection",
    description:
      "Regular family events that strengthen intergenerational bonds and create new shared memories.",
  },
  {
    icon: Star,
    title: "Special Celebrations",
    description:
      "We honor every birthday, anniversary, and personal milestone with meaningful celebrations.",
  },
];

const Legacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">
                Legacy
              </span>
              <h1 className="heading-xl mt-4 mb-6">
                Honoring Every <span className="text-primary">Life Story</span>
              </h1>
              <p className="body-lg mb-8">
                Every person who arrives at Bearspaw brings a life full of
                experiences, achievements, and memories. Our commitment is to
                preserve and celebrate that legacy with dignity and respect.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Explore Our Philosophy
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-[20px] overflow-hidden shadow-elevated"
            >
              <img
                src={wellnessRoom}
                alt="Community living space at Bearspaw"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-6">
              Preserving <span className="text-primary">Dignity</span>
            </h2>
            <p className="body-lg">
              We believe every stage of life deserves to be lived with purpose,
              connection, and celebration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-lg mb-6">
              Begin Writing a New <span className="text-primary">Chapter</span>
            </h2>
            <p className="body-lg mb-10">
              Discover how Bearspaw honors each resident's legacy while creating
              meaningful new experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14035897055" className="btn-primary">
                Call (403) 555-0123
              </a>
              <Link to="/contact" className="btn-secondary">
                Send Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Legacy;
