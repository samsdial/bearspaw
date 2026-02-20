import wellnessRoom from "@/assets/assisted-living.jpeg";
import commonRoom from "@/assets/common-room-03.jpg";
import heroGarden from "@/assets/hero-garden-02.jpg";
import natureTrail from "@/assets/hero-garden-03.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Moon,
  Music,
  Sunrise,
  TreePine,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "react-router-dom";

const daySchedule = [
  {
    icon: Sunrise,
    time: "7:00 - 9:00",
    title: "Peaceful Morning",
    description:
      "A gentle start, optional morning exercise, and a gourmet breakfast in the dining room.",
  },
  {
    icon: TreePine,
    time: "9:00 - 12:00",
    title: "Morning Activities",
    description:
      "Garden walks, art workshops, gentle yoga, and personalized therapies.",
  },
  {
    icon: UtensilsCrossed,
    time: "12:00 - 14:00",
    title: "Lunch and Social Time",
    description:
      "Chef-prepared lunch with nutritious options, followed by social coffee time.",
  },
  {
    icon: Music,
    time: "14:00 - 17:00",
    title: "Afternoon Enrichment",
    description:
      "Live music, group games, family visits, and reading time in the library.",
  },
  {
    icon: Users,
    time: "17:00 - 19:00",
    title: "Community Dinner",
    description:
      "Elegant dining together with conversation and light evening entertainment.",
  },
  {
    icon: Moon,
    time: "19:00 - 21:00",
    title: "Serene Evening",
    description:
      "Movies, relaxing music, reading, or quiet time in shared spaces.",
  },
];

const CommunityLife = () => {
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
                Community Life
              </span>
              <h1 className="heading-xl mt-4 mb-6">
                Discover Daily Life at{" "}
                <span className="text-primary">Bearspaw</span>
              </h1>
              <p className="body-lg mb-8">
                Every day at Bearspaw is filled with purpose, connection, and
                joy. From sunrise to evening, we create experiences that make
                life truly meaningful.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Experience It Yourself
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-[20px] overflow-hidden shadow-elevated"
            >
              <img
                src={commonRoom}
                alt="Daily life at Bearspaw"
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
              A Day at <span className="text-primary">Bearspaw</span>
            </h2>
            <p className="body-lg">
              Every moment is thoughtfully designed to balance activity and
              rest, social connection and quiet time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {daySchedule.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-sans text-sm font-medium text-primary">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="heading-lg mb-6">
              Our <span className="text-primary">Spaces</span>
            </h2>
            <p className="body-lg">
              Spaces designed with warmth and elegance to feel like home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: heroGarden, label: "Gardens and Terraces" },
              { src: commonRoom, label: "Shared Living Room" },
              { src: wellnessRoom, label: "Wellness Lounge" },
              { src: natureTrail, label: "Nature Trails" },
            ].map((img, index) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-[20px] overflow-hidden shadow-card group"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <p className="absolute bottom-4 left-4 font-serif text-xl font-semibold text-primary-foreground">
                  {img.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-lg mb-6">
              Would You Like to Experience Bearspaw{" "}
              <span className="text-primary">In Person</span>?
            </h2>
            <p className="body-lg mb-10">
              We invite you to spend a day with us and discover what makes our
              community special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14035897055" className="btn-primary">
                Call (403) 555-0123
              </a>
              <Link to="/contact" className="btn-secondary">
                Request a Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CommunityLife;
