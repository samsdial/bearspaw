import { motion } from 'framer-motion';
import { ArrowLeft, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroGarden from '@/assets/hero-garden.jpg';

const testimonials = [
  {
    name: 'Margaret Thompson',
    relation: 'Hija de residente',
    quote: 'Bearspaw transformed our family\'s experience. The care team treats my mother like their own family. We finally have peace of mind knowing she\'s in the best hands.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    relation: 'Esposo de residente',
    quote: 'The memory care program has been incredible for my wife. The staff\'s patience and compassion make every day meaningful. I couldn\'t imagine a better place for her.',
    rating: 5,
  },
  {
    name: 'Sandra Williams',
    relation: 'Hija de residente',
    quote: 'Moving dad to Bearspaw was the best decision we made. He loves the gardens, the activities, and has made wonderful friends. His quality of life has improved dramatically.',
    rating: 5,
  },
  {
    name: 'James Patterson',
    relation: 'Hijo de residente',
    quote: 'The wellness programs have given my mother a new lease on life. She\'s more active, more social, and happier than she\'s been in years. Thank you, Bearspaw!',
    rating: 5,
  },
  {
    name: 'Linda Morrison',
    relation: 'Nieta de residente',
    quote: 'My grandmother feels truly at home here. The staff remembers her favorite songs, her stories, and her preferences. It\'s not just care — it\'s genuine love.',
    rating: 5,
  },
  {
    name: 'David Nakamura',
    relation: 'Hijo de residente',
    quote: 'From the beautiful gardens to the gourmet meals, every detail at Bearspaw shows their commitment to dignity and quality. My father has never been happier.',
    rating: 5,
  },
];

const Testimonios = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-card">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto">
            <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Testimonios</span>
            <h1 className="heading-xl mt-4 mb-6">
              Lo que Dicen las <span className="text-primary">Familias</span>
            </h1>
            <p className="body-lg">
              Las palabras de las familias que confían en nosotros son nuestro mayor orgullo. Descubre por qué Bearspaw es el hogar elegido por tantas familias en Calgary.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="font-sans text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-sans font-semibold text-foreground">{testimonial.name}</p>
                  <p className="font-sans text-sm text-muted-foreground">{testimonial.relation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[20px] overflow-hidden shadow-card">
              <img src={heroGarden} alt="Familia visitando Bearspaw" className="w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="heading-lg mb-6">Únete a Nuestra <span className="text-primary">Familia</span></h2>
              <p className="body-md mb-6">
                Más de 200 familias han confiado en Bearspaw para el cuidado de sus seres queridos. Te invitamos a conocer por qué somos la comunidad preferida en Calgary.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="font-serif text-3xl font-semibold text-primary">98%</p>
                  <p className="font-sans text-sm text-muted-foreground">Satisfacción familiar</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-semibold text-primary">200+</p>
                  <p className="font-sans text-sm text-muted-foreground">Familias felices</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-semibold text-primary">15+</p>
                  <p className="font-sans text-sm text-muted-foreground">Años de servicio</p>
                </div>
              </div>
              <Link to="/contacto" className="btn-primary inline-block">Agenda Tu Visita</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonios;
