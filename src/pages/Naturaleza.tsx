import { motion } from 'framer-motion';
import { ArrowLeft, TreePine, Sun, Flower2, Bird, Wind, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroGarden from '@/assets/hero-garden.jpg';
import natureTrail from '@/assets/nature-trail.jpg';

const features = [
  {
    icon: TreePine,
    title: 'Therapeutic Gardens',
    description: 'Green spaces designed to stimulate the senses and promote relaxation, with accessible paths and rest areas.',
  },
  {
    icon: Sun,
    title: 'Outdoor Terraces',
    description: 'Sunny terraces with Rocky Mountain views where residents enjoy fresh air year-round.',
  },
  {
    icon: Flower2,
    title: 'Gardening Program',
    description: 'Therapeutic gardening activities where residents grow flowers and herbs, fostering purpose and connection with nature.',
  },
  {
    icon: Bird,
    title: 'Bird Watching',
    description: 'Birdwatching stations and feeders thoughtfully placed to enjoy local wildlife from the comfort of home.',
  },
  {
    icon: Wind,
    title: 'Nature Trails',
    description: 'Safe, accessible pathways through native gardens, perfect for morning walks and outdoor meditation.',
  },
  {
    icon: Droplets,
    title: 'Water Features',
    description: 'Fountains and water elements that create a calming soundscape and a serene atmosphere.',
  },
];

const Nature = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-card">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Nature</span>
              <h1 className="heading-xl mt-4 mb-6">
                Living in Harmony with <span className="text-primary">Nature</span>
              </h1>
              <p className="body-lg mb-8">
                Bearspaw is located in an exceptional natural setting at the base of the Rocky Mountains. Our green spaces and therapeutic gardens offer a meaningful connection to nature that nourishes the soul.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Visit Our Gardens
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={heroGarden} alt="Gardens at Bearspaw Seniors Living" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Spaces That <span className="text-primary">Heal</span>
            </h2>
            <p className="body-lg">Nature has extraordinary healing power. We integrate the natural environment into every aspect of life at Bearspaw.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card-elevated">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[20px] overflow-hidden shadow-card">
              <img src={natureTrail} alt="Nature trail at Bearspaw" className="w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="heading-lg mb-6">A Natural <span className="text-primary">Retreat</span></h2>
              <p className="body-md mb-6">Our 5-acre campus includes therapeutic gardens, natural trails, and reflection areas designed to support each resident's physical and emotional wellbeing.</p>
              <ul className="space-y-3 mb-8">
                {['5 acres of gardens and green spaces', 'Accessible pathways with resting benches', 'Community herb garden', 'Outdoor meditation area', 'Greenhouse for year-round activities'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-outline inline-block">Schedule Your Visit</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Nature;
