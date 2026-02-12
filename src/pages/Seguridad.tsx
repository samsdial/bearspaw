import commonRoom from "@/assets/common-room.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bell,
  Eye,
  HeartPulse,
  Lock,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Lock,
    title: "Controlled Access",
    description:
      "Secure entry systems with modern technology that protect residents while preserving a warm, welcoming environment.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description:
      "Trained staff available around the clock with rapid-response protocols for any situation.",
  },
  {
    icon: Bell,
    title: "Emergency Alert System",
    description:
      "Each room includes an emergency call system connected directly to our professional care team.",
  },
  {
    icon: HeartPulse,
    title: "Medical Support",
    description:
      "Registered nurses available at all times, with individualized care plans and ongoing medical follow-up.",
  },
  {
    icon: Users,
    title: "Trained Staff",
    description:
      "Our team receives ongoing training in safety protocols, first aid, and emergency response.",
  },
  {
    icon: Shield,
    title: "Safety Protocols",
    description:
      "Evacuation plans, regular drills, and coordination with local emergency services for maximum protection.",
  },
];

const Safety = () => {
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
                Safety
              </span>
              <h1 className="heading-xl mt-4 mb-6">
                Protection and{" "}
                <span className="text-primary">Peace of Mind</span>
              </h1>
              <p className="body-lg mb-8">
                At Bearspaw, resident safety is our highest priority. We combine
                advanced technology with dedicated human care to create an
                environment where everyone feels protected and at ease.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Learn About Our Protocols
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
                alt="Safe common area at Bearspaw"
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
              Our Commitment to <span className="text-primary">Safety</span>
            </h2>
            <p className="body-lg">
              Every detail of our community is designed with protection and
              wellbeing in mind.
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
              Want to learn more about our{" "}
              <span className="text-primary">safety</span>?
            </h2>
            <p className="body-lg mb-10">
              Schedule a visit and experience our community and safety protocols
              firsthand.
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

export default Safety;
