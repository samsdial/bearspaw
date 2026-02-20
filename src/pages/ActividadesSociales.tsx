import wellnessRoom from "@/assets/assisted-living-02.jpg";
import commonRoom from "@/assets/common-room-02.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Coffee,
  Gamepad2,
  PartyPopper,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    icon: PartyPopper,
    title: "Events and Celebrations",
    description:
      "Theme parties, birthday celebrations, cultural festivities, and seasonal events that bring joy every month.",
  },
  {
    icon: Coffee,
    title: "Social Coffee Club",
    description:
      "Morning gatherings with coffee and conversation where residents share stories, news, and friendship.",
  },
  {
    icon: BookOpen,
    title: "Book Club",
    description:
      "Group readings, literary discussions, and storytelling that stimulate the mind and encourage dialogue.",
  },
  {
    icon: Gamepad2,
    title: "Games and Entertainment",
    description:
      "Board game nights, bingo, trivia, and interactive activities that encourage fun and social connection.",
  },
  {
    icon: Users,
    title: "Intergenerational Programs",
    description:
      "School group visits, mentorship programs, and shared activities that connect generations.",
  },
  {
    icon: Calendar,
    title: "Community Outings",
    description:
      "Organized excursions to museums, restaurants, local markets, and cultural events around the city.",
  },
];

const SocialActivities = () => {
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
                Social Activities
              </span>
              <h1 className="heading-xl mt-4 mb-6">
                Community and <span className="text-primary">Connection</span>
              </h1>
              <p className="body-lg mb-8">
                At Bearspaw, we believe social connection is essential to a
                fulfilling life. Our calendar is filled with activities designed
                to build meaningful bonds.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Explore Our Activities
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
                alt="Social activities at Bearspaw"
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
              There Is Always Something to{" "}
              <span className="text-primary">Enjoy</span>
            </h2>
            <p className="body-lg">
              A vibrant calendar of activities that keeps our residents active,
              connected, and happy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <activity.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {activity.description}
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
                Upcoming <span className="text-primary">Events</span>
              </h2>
              <p className="body-md mb-6">
                Our monthly calendar is filled with special events and
                activities for every interest.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Bingo Night - Every Friday",
                  "Jazz Concert - First Saturday of the month",
                  "Cooking Workshop - Every Wednesday",
                  "Gardening Club - Tuesdays and Thursdays",
                  "Movie Night - Sundays",
                  "Therapy Pet Visits - Biweekly",
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
                Request Full Calendar
              </Link>
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
                alt="Community events at Bearspaw"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SocialActivities;
