import { motion } from 'framer-motion';
import { Shield, TreePine, Crown } from 'lucide-react';

const philosophyCards = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'State-of-the-art security systems, emergency response protocols, and trained staff ensure peace of mind for residents and families alike.',
    accent: 'From medical alert systems to secure outdoor areas',
  },
  {
    icon: TreePine,
    title: 'Nature Connection',
    description:
      'Our biophilic design philosophy integrates nature into every aspect of daily life - from healing gardens to sunlit common areas.',
    accent: 'Research-backed therapeutic environments',
  },
  {
    icon: Crown,
    title: 'Lasting Legacy',
    description:
      'We honor each resident\'s unique story, preserving their dignity and celebrating the wisdom they bring to our community.',
    accent: 'Life enrichment programs and memory care',
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">
            The Bearspaw Concept
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            A Philosophy Built on{' '}
            <span className="text-primary">Three Pillars</span>
          </h2>
          <p className="body-lg">
            Our approach to senior care is rooted in the belief that every person
            deserves to live with purpose, surrounded by beauty and compassion.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated group"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <card.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Accent Text */}
                <p className="font-sans text-sm font-medium text-primary">
                  {card.accent}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
