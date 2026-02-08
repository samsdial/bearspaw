import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import commonRoom from '@/assets/common-room.jpg';
import natureTrail from '@/assets/nature-trail.jpg';
import wellnessRoom from '@/assets/wellness-room.jpg';

const services = [
  {
    title: 'Assisted Living',
    description:
      'Personalized support for daily activities while maintaining independence and dignity. Our compassionate team assists with bathing, dressing, medication management, and mobility.',
    features: ['24/7 Care Staff', 'Medication Management', 'Housekeeping & Laundry'],
    image: commonRoom,
  },
  {
    title: 'Memory Care',
    description:
      'Specialized programs for residents with Alzheimer\'s and dementia in a secure, calming environment. Evidence-based activities promote cognitive health and emotional wellbeing.',
    features: ['Secure Environment', 'Cognitive Therapies', 'Family Support Programs'],
    image: natureTrail,
  },
  {
    title: 'Wellness Programs',
    description:
      'Holistic wellness offerings including fitness classes, spa treatments, therapeutic gardens, and social activities designed to nurture body, mind, and spirit.',
    features: ['Yoga & Exercise', 'Spa Services', 'Art & Music Therapy'],
    image: wellnessRoom,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Comprehensive Care for{' '}
            <span className="text-primary">Every Need</span>
          </h2>
          <p className="body-lg">
            From independent living support to specialized memory care, we offer
            a continuum of services tailored to each resident's journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background rounded-[20px] overflow-hidden shadow-card group hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-sans text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans font-medium text-primary hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
