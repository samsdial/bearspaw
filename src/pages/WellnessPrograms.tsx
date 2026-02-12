import { motion } from 'framer-motion';
import { ArrowLeft, Dumbbell, Sparkles, Palette, Music, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import wellnessRoom from '@/assets/wellness-room.jpg';
import natureTrail from '@/assets/nature-trail.jpg';

const programs = [
  {
    icon: Dumbbell,
    title: 'Yoga y Ejercicio',
    description: 'Clases de yoga adaptadas, ejercicios de equilibrio, tai chi y caminatas guiadas diseñadas para todos los niveles de movilidad.',
  },
  {
    icon: Sparkles,
    title: 'Servicios de Spa',
    description: 'Tratamientos relajantes incluyendo masajes terapéuticos, manicura, pedicura y cuidado personal de primera calidad.',
  },
  {
    icon: Palette,
    title: 'Arte Terapéutico',
    description: 'Talleres de pintura, escultura, manualidades y escritura creativa que estimulan la expresión artística y la creatividad.',
  },
  {
    icon: Music,
    title: 'Terapia Musical',
    description: 'Sesiones de música en vivo, canto coral, percusión rítmica y escucha guiada que despiertan recuerdos y emociones positivas.',
  },
  {
    icon: Leaf,
    title: 'Mindfulness y Meditación',
    description: 'Prácticas de atención plena, respiración guiada y meditación que promueven la calma interior y el bienestar emocional.',
  },
  {
    icon: Heart,
    title: 'Nutrición Integral',
    description: 'Asesoramiento nutricional personalizado y talleres de cocina saludable para mantener una alimentación equilibrada y placentera.',
  },
];

const WellnessPrograms = () => {
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
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Wellness Programs</span>
              <h1 className="heading-xl mt-4 mb-6">
                Bienestar para <span className="text-primary">Cuerpo y Alma</span>
              </h1>
              <p className="body-lg mb-8">
                Nuestros programas de bienestar holístico están diseñados para nutrir el cuerpo, estimular la mente y elevar el espíritu de cada residente.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Descubre Nuestros Programas
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={wellnessRoom} alt="Sala de wellness en Bearspaw" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Nuestros <span className="text-primary">Programas</span>
            </h2>
            <p className="body-lg">Una variedad completa de actividades y terapias para mantener la vitalidad y el bienestar en cada etapa de la vida.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div key={program.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card-elevated">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{program.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[20px] overflow-hidden shadow-card">
              <img src={natureTrail} alt="Actividades al aire libre" className="w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="heading-lg mb-6">Horario <span className="text-primary">Semanal</span></h2>
              <p className="body-md mb-6">Una programación variada que ofrece algo especial cada día de la semana.</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Lunes: Yoga suave y meditación matutina',
                  'Martes: Taller de arte y pintura',
                  'Miércoles: Música en vivo y canto coral',
                  'Jueves: Terapia de jardinería',
                  'Viernes: Spa y cuidado personal',
                  'Sábado: Actividades sociales y juegos',
                  'Domingo: Caminatas y contemplación',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="btn-outline inline-block">Conoce Más</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WellnessPrograms;
