import natureTrail from "@/assets/hero-garden-02.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Clock,
  Heart,
  Leaf,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "Secure Environment",
    description:
      "Our thoughtfully designed spaces include secure entry points and monitored outdoor gardens, allowing freedom of movement within a safe, protected setting.",
  },
  {
    icon: Brain,
    title: "Cognitive Therapies",
    description:
      "Evidence-based programs including reminiscence therapy, music therapy, and sensory stimulation designed to maintain cognitive function and spark joy.",
  },
  {
    icon: Heart,
    title: "Person-Centered Care",
    description:
      "Each resident receives a customized care plan that honors their life story, preferences, and routines — because every person's journey with dementia is unique.",
  },
  {
    icon: Users,
    title: "Family Support Programs",
    description:
      "Regular family meetings, educational workshops, and support groups to help loved ones understand and navigate the journey alongside their family member.",
  },
  {
    icon: Clock,
    title: "24/7 Specialized Staff",
    description:
      "Our team is specially trained in dementia care techniques, including de-escalation, validation therapy, and compassionate communication.",
  },
  {
    icon: Leaf,
    title: "Therapeutic Gardens",
    description:
      "Beautifully designed sensory gardens provide calming outdoor spaces for walking, relaxation, and nature-based therapeutic activities.",
  },
];

const dailyActivities = [
  "Morning wellness & gentle stretching",
  "Music & art therapy sessions",
  "Guided reminiscence groups",
  "Nature walks in secure gardens",
  "Sensory stimulation programs",
  "Social dining experiences",
  "Evening relaxation rituals",
];

const MemoryCare = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
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
                Memory Care
              </span>
              <h1 className="heading-xl mt-4 mb-6">
                Compassionate Care for{" "}
                <span className="text-primary">Every Memory</span>
              </h1>
              <p className="body-lg mb-8">
                Our specialized Memory Care program provides a secure, nurturing
                environment for residents living with Alzheimer's and dementia.
                We honor each person's story while supporting their wellbeing
                with evidence-based therapies and heartfelt compassion.
              </p>
              <a href="#contact-memory" className="btn-primary inline-block">
                Schedule a Visit
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-[20px] overflow-hidden shadow-elevated"
            >
              <img
                src={natureTrail}
                alt="Peaceful nature trail at Bearspaw Memory Care"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              Built Around <span className="text-primary">Dignity & Joy</span>
            </h2>
            <p className="body-lg">
              Every aspect of our Memory Care program is designed to preserve
              dignity, encourage engagement, and create moments of genuine
              connection and happiness.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
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

      {/* Daily Life */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">
                A Day at Bearspaw
              </span>
              <h2 className="heading-lg mt-4 mb-6">
                Meaningful <span className="text-primary">Daily Rhythms</span>
              </h2>
              <p className="body-md mb-8">
                Structure and routine bring comfort. Our daily programming is
                thoughtfully crafted to balance stimulation with rest, social
                connection with quiet time, and familiar rituals with gentle new
                experiences.
              </p>

              <ul className="space-y-4">
                {dailyActivities.map((activity, index) => (
                  <motion.li
                    key={activity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-3 font-sans text-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {activity}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-[20px] p-10 shadow-card"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Promise to Families
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                We understand that entrusting your loved one's care to others is
                one of the most difficult decisions a family can make. At
                Bearspaw, we treat every resident as we would our own family.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Regular family updates and open communication",
                  "Flexible visiting hours and family participation",
                  "Transparent care planning and progress sharing",
                  "Monthly family education and support sessions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-sans text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact-memory" className="btn-outline inline-block">
                Talk to Our Care Team
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-memory" className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-lg mb-6">
              Begin the <span className="text-primary">Conversation</span>
            </h2>
            <p className="body-lg mb-10">
              Every family's situation is unique. Let us listen to yours and
              share how Bearspaw Memory Care can provide the compassionate
              support your loved one deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14035897055" className="btn-primary">
                Call (403) 555-0123
              </a>
              <Link to="/#contact" className="btn-secondary">
                Send an Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MemoryCare;
