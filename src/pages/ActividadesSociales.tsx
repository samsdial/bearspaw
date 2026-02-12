import { motion } from 'framer-motion';
import { ArrowLeft, Users, PartyPopper, Coffee, BookOpen, Gamepad2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import commonRoom from '@/assets/common-room.jpg';
import wellnessRoom from '@/assets/wellness-room.jpg';

const activities = [
  {
    icon: PartyPopper,
    title: 'Eventos y Celebraciones',
    description: 'Fiestas temáticas, celebraciones de cumpleaños, festividades culturales y eventos estacionales que llenan de alegría cada mes.',
  },
  {
    icon: Coffee,
    title: 'Club de Café Social',
    description: 'Reuniones matutinas con café y conversación donde los residentes comparten historias, noticias y fortalecen amistades.',
  },
  {
    icon: BookOpen,
    title: 'Club de Lectura',
    description: 'Lecturas grupales, discusiones literarias y narración de cuentos que estimulan la mente y fomentan el diálogo.',
  },
  {
    icon: Gamepad2,
    title: 'Juegos y Entretenimiento',
    description: 'Noches de juegos de mesa, bingo, trivia y actividades interactivas que promueven la diversión y la socialización.',
  },
  {
    icon: Users,
    title: 'Programas Intergeneracionales',
    description: 'Visitas de grupos escolares, programas de mentoría y actividades compartidas que conectan generaciones.',
  },
  {
    icon: Calendar,
    title: 'Salidas Comunitarias',
    description: 'Excursiones organizadas a museos, restaurantes, mercados locales y eventos culturales de la ciudad.',
  },
];

const ActividadesSociales = () => {
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
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Actividades Sociales</span>
              <h1 className="heading-xl mt-4 mb-6">
                Comunidad y <span className="text-primary">Conexión</span>
              </h1>
              <p className="body-lg mb-8">
                En Bearspaw creemos que las conexiones sociales son fundamentales para una vida plena. Nuestro calendario está lleno de actividades diseñadas para crear lazos significativos.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Conoce Nuestras Actividades
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={commonRoom} alt="Actividades sociales en Bearspaw" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Siempre hay Algo que <span className="text-primary">Disfrutar</span>
            </h2>
            <p className="body-lg">Un calendario vibrante de actividades que mantiene a nuestros residentes activos, conectados y felices.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div key={activity.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card-elevated">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <activity.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{activity.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="heading-lg mb-6">Eventos <span className="text-primary">Próximos</span></h2>
              <p className="body-md mb-6">Nuestro calendario mensual está lleno de eventos especiales y actividades para todos los gustos.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Noche de Bingo - Todos los viernes',
                  'Concierto de Jazz - Primer sábado del mes',
                  'Taller de Cocina - Cada miércoles',
                  'Club de Jardinería - Martes y jueves',
                  'Noche de Cine - Domingos',
                  'Visita de Mascotas Terapéuticas - Quincenal',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="btn-outline inline-block">Solicitar Calendario Completo</Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[20px] overflow-hidden shadow-card">
              <img src={wellnessRoom} alt="Eventos sociales en Bearspaw" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ActividadesSociales;
