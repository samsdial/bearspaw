import { motion } from 'framer-motion';
import { ArrowLeft, Heart, BookOpen, Camera, Music, Palette, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import wellnessRoom from '@/assets/wellness-room.jpg';

const features = [
  {
    icon: BookOpen,
    title: 'Historias de Vida',
    description: 'Cada residente tiene una historia única. Documentamos y celebramos sus memorias, logros y experiencias de vida con dedicación.',
  },
  {
    icon: Camera,
    title: 'Álbumes de Recuerdos',
    description: 'Creamos álbumes fotográficos personalizados que capturan momentos especiales y celebraciones en la comunidad.',
  },
  {
    icon: Music,
    title: 'Tradiciones Musicales',
    description: 'La música de cada generación resuena en nuestros espacios, conectando a los residentes con sus recuerdos más preciados.',
  },
  {
    icon: Palette,
    title: 'Arte y Expresión',
    description: 'Talleres de arte donde los residentes pueden expresarse creativamente y dejar su huella artística personal.',
  },
  {
    icon: Heart,
    title: 'Conexión Familiar',
    description: 'Eventos familiares regulares que fortalecen los lazos intergeneracionales y crean nuevos recuerdos compartidos.',
  },
  {
    icon: Star,
    title: 'Celebraciones Especiales',
    description: 'Honramos cada cumpleaños, aniversario y logro personal con celebraciones significativas que reconocen la dignidad de cada vida.',
  },
];

const Legado = () => {
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
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Legado</span>
              <h1 className="heading-xl mt-4 mb-6">
                Honramos Cada <span className="text-primary">Historia de Vida</span>
              </h1>
              <p className="body-lg mb-8">
                Cada persona que llega a Bearspaw trae consigo una vida llena de experiencias, logros y memorias. Nuestro compromiso es preservar y celebrar ese legado con dignidad y respeto.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Conoce Nuestra Filosofía
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={wellnessRoom} alt="Espacio de convivencia en Bearspaw" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Preservando <span className="text-primary">Dignidad</span>
            </h2>
            <p className="body-lg">Creemos que cada etapa de la vida merece ser vivida con propósito, conexión y celebración.</p>
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
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="heading-lg mb-6">Comienza a Escribir un Nuevo <span className="text-primary">Capítulo</span></h2>
            <p className="body-lg mb-10">Descubre cómo en Bearspaw honramos el legado de cada residente mientras creamos nuevas experiencias significativas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14035550123" className="btn-primary">Llamar (403) 555-0123</a>
              <Link to="/contacto" className="btn-secondary">Enviar Consulta</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Legado;
