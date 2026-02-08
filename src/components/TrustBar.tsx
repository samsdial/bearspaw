import { motion } from 'framer-motion';
import { Clock, Leaf, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  {
    icon: Clock,
    title: '24/7 Professional Care',
    description: 'Round-the-clock nursing and support staff',
  },
  {
    icon: Leaf,
    title: 'Nature-Integrated Living',
    description: 'Gardens, walking paths, and outdoor spaces',
  },
  {
    icon: Sparkles,
    title: 'Boutique Amenities',
    description: 'Restaurant-quality dining and spa services',
  },
  {
    icon: Heart,
    title: 'Person-Centered Care',
    description: 'Individualized care plans for every resident',
  },
];

const TrustBar = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
