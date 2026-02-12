import commonRoom from "@/assets/common-room.jpg";
import wellnessRoom from "@/assets/wellness-room.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowLeft,
  HeartHandshake,
  Home,
  Pill,
  Shirt,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: HeartHandshake,
    title: "Personalized Assistance",
    description:
      "Individual care plans that adapt to each resident's changing needs while preserving independence.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Professional medication administration and oversight with personalized follow-up and physician coordination.",
  },
  {
    icon: Utensils,
    title: "Gourmet Dining",
    description:
      "Chef-prepared menus with personalized nutrition options, served in an elegant communal dining room.",
  },
  {
    icon: Shirt,
    title: "Laundry and Housekeeping",
    description:
      "Comprehensive laundry and housekeeping services so residents can focus on enjoying their day.",
  },
  {
    icon: Accessibility,
    title: "Mobility and Transportation",
    description:
      "Mobility assistance, escort support for medical appointments, and scheduled transportation for community outings.",
  },
  {
    icon: Home,
    title: "Private Suites",
    description:
      "Spacious, bright suites with adapted private bathrooms designed to feel like home.",
  },
];

const AssistedLiving = () => {
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
                Assisted Living
              </span>
              <h1 className="heading-xl mt-4 mb-6">
                Independence with <span className="text-primary">Support</span>
              </h1>
              <p className="body-lg mb-8">
                Our Assisted Living program offers the ideal balance of personal
                independence and professional support, allowing each resident to
                live with dignity and comfort.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Request Information
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
                alt="Assisted Living lounge at Bearspaw"
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
              Everything You <span className="text-primary">Need</span>
            </h2>
            <p className="body-lg">
              Comprehensive services designed to make life more comfortable,
              safe, and enjoyable.
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
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">
                A Day in <span className="text-primary">Assisted Living</span>
              </h2>
              <p className="body-md mb-6">
                Each day is filled with opportunities to enjoy, connect, and
                live with purpose.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Chef-prepared breakfast",
                  "Recreational and social activities",
                  "Gentle exercise and guided walks",
                  "Gourmet lunch in the communal dining room",
                  "Art, reading, and music workshops",
                  "Rest time and family visits",
                  "Elegant dinner and evening entertainment",
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[20px] overflow-hidden shadow-card"
            >
              <img
                src={wellnessRoom}
                alt="Activities in Assisted Living"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
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
              Ready to <span className="text-primary">Meet Us</span>?
            </h2>
            <p className="body-lg mb-10">
              Schedule a personalized visit and discover why families trust
              Bearspaw with the care of their loved ones.
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

export default AssistedLiving;
