import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Moving my mother to Bearspaw was the best decision our family ever made. The staff treats her with such genuine warmth, and she's flourished in the garden therapy program.",
    author: 'Margaret Thompson',
    relation: 'Daughter of Resident',
    location: 'Calgary, AB',
  },
  {
    quote:
      "What sets Bearspaw apart is their attention to detail. From the beautifully prepared meals to the personalized care plans, every aspect shows their commitment to dignity.",
    author: 'Dr. Robert Chen',
    relation: 'Son of Resident',
    location: 'Edmonton, AB',
  },
  {
    quote:
      "After visiting dozens of facilities, we knew Bearspaw was different the moment we walked in. It truly feels like a luxury resort, not a care facility. Dad is genuinely happy here.",
    author: 'Sarah Mitchell',
    relation: 'Daughter of Resident',
    location: 'Red Deer, AB',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="heading-lg mt-4">
            Trusted by{' '}
            <span className="text-primary">Families</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-3xl mx-auto"
              >
                <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-sans font-semibold text-lg text-foreground">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="font-sans text-muted-foreground">
                    {testimonials[currentIndex].relation} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
