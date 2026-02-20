import wellnessRoom from "@/assets/common-room-03.jpg";
import natureTrail from "@/assets/hero-garden-03.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Dumbbell,
  Heart,
  Leaf,
  Music,
  Palette,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Dumbbell,
    title: "Yoga and Exercise",
    description:
      "Adapted yoga classes, balance training, tai chi, and guided walks designed for all mobility levels.",
  },
  {
    icon: Sparkles,
    title: "Spa Services",
    description:
      "Relaxing treatments including therapeutic massage, manicures, pedicures, and premium personal care.",
  },
  {
    icon: Palette,
    title: "Therapeutic Art",
    description:
      "Painting, sculpture, crafts, and creative writing workshops that inspire expression and creativity.",
  },
  {
    icon: Music,
    title: "Music Therapy",
    description:
      "Live music, choral singing, rhythmic percussion, and guided listening that spark memories and positive emotions.",
  },
  {
    icon: Leaf,
    title: "Mindfulness and Meditation",
    description:
      "Mindfulness practices, guided breathing, and meditation that promote inner calm and emotional wellbeing.",
  },
  {
    icon: Heart,
    title: "Holistic Nutrition",
    description:
      "Personalized nutritional guidance and healthy cooking workshops to support balanced, enjoyable eating habits.",
  },
];

const WellnessPrograms = () => {
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
                Wellness Programs
              </span>
              <h1 className="heading-xl mt-4 mb-6">
                Wellness for <span className="text-primary">Body and Soul</span>
              </h1>
              <p className="body-lg mb-8">
                Our holistic wellness programs are designed to nourish the body,
                stimulate the mind, and uplift the spirit of every resident.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Discover Our Programs
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
                alt="Wellness space at Bearspaw"
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
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="body-lg">
              A complete range of activities and therapies to support vitality
              and wellbeing at every stage of life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[20px] overflow-hidden shadow-card"
            >
              <img
                src={natureTrail}
                alt="Outdoor wellness activities"
                className="w-full h-[350px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">
                Weekly <span className="text-primary">Schedule</span>
              </h2>
              <p className="body-md mb-6">
                A varied schedule that offers something special every day of the
                week.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Monday: Gentle yoga and morning meditation",
                  "Tuesday: Art and painting workshop",
                  "Wednesday: Live music and choir",
                  "Thursday: Gardening therapy",
                  "Friday: Spa and personal care",
                  "Saturday: Social activities and games",
                  "Sunday: Walks and reflection",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-outline inline-block">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WellnessPrograms;
