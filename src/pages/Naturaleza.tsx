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
    title: 'Jardines Terapéuticos',
    description: 'Espacios verdes diseñados para estimular los sentidos y promover la relajación, con senderos accesibles y áreas de descanso.',
  },
  {
    icon: Sun,
    title: 'Terrazas al Aire Libre',
    description: 'Terrazas soleadas con vistas a las montañas Rocosas donde nuestros residentes pueden disfrutar del aire fresco durante todo el año.',
  },
  {
    icon: Flower2,
    title: 'Programa de Jardinería',
    description: 'Actividades de jardinería terapéutica donde los residentes pueden cultivar flores y hierbas, fomentando propósito y conexión con la tierra.',
  },
  {
    icon: Bird,
    title: 'Observación de Aves',
    description: 'Estaciones de observación de aves y comederos estratégicamente ubicados para disfrutar de la fauna local desde la comodidad del hogar.',
  },
  {
    icon: Wind,
    title: 'Senderos Naturales',
    description: 'Caminos seguros y accesibles que serpentean a través de jardines nativos, perfectos para caminatas matutinas y meditación al aire libre.',
  },
  {
    icon: Droplets,
    title: 'Fuentes de Agua',
    description: 'Fuentes y elementos acuáticos que crean un ambiente sonoro relajante, contribuyendo a la calma y serenidad del entorno.',
  },
];

const Naturaleza = () => {
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Naturaleza</span>
              <h1 className="heading-xl mt-4 mb-6">
                Vivir en Armonía con la <span className="text-primary">Naturaleza</span>
              </h1>
              <p className="body-lg mb-8">
                Bearspaw está ubicado en un entorno natural privilegiado al pie de las Montañas Rocosas. Nuestros espacios verdes y jardines terapéuticos ofrecen conexión con la naturaleza que nutre el alma.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Visita Nuestros Jardines
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={heroGarden} alt="Jardines de Bearspaw Seniors Living" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Espacios que <span className="text-primary">Sanan</span>
            </h2>
            <p className="body-lg">La naturaleza tiene un poder sanador extraordinario. Integramos el entorno natural en cada aspecto de la vida en Bearspaw.</p>
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
              <img src={natureTrail} alt="Sendero natural en Bearspaw" className="w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="heading-lg mb-6">Un Refugio <span className="text-primary">Natural</span></h2>
              <p className="body-md mb-6">Nuestro campus de 5 acres incluye jardines terapéuticos, senderos naturales y áreas de contemplación diseñadas para promover el bienestar físico y emocional de cada residente.</p>
              <ul className="space-y-3 mb-8">
                {['5 acres de jardines y espacios verdes', 'Senderos accesibles con bancas de descanso', 'Jardín de hierbas aromáticas comunitario', 'Área de meditación al aire libre', 'Invernadero para actividades todo el año'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="btn-outline inline-block">Agenda Tu Visita</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Naturaleza;
