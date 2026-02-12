import { motion } from 'framer-motion';
import { ArrowLeft, Sunrise, UtensilsCrossed, TreePine, Music, Users, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import commonRoom from '@/assets/common-room.jpg';
import heroGarden from '@/assets/hero-garden.jpg';
import wellnessRoom from '@/assets/wellness-room.jpg';
import natureTrail from '@/assets/nature-trail.jpg';

const daySchedule = [
  { icon: Sunrise, time: '7:00 - 9:00', title: 'Mañana Tranquila', description: 'Despertar suave, ejercicios matutinos opcionales y desayuno gourmet en el comedor.' },
  { icon: TreePine, time: '9:00 - 12:00', title: 'Actividades Matutinas', description: 'Caminatas por los jardines, talleres de arte, yoga suave y terapias personalizadas.' },
  { icon: UtensilsCrossed, time: '12:00 - 14:00', title: 'Almuerzo y Socialización', description: 'Comida preparada por nuestro chef con opciones nutricionales, seguida de café social.' },
  { icon: Music, time: '14:00 - 17:00', title: 'Tarde de Enriquecimiento', description: 'Música en vivo, juegos grupales, visitas familiares y tiempo de lectura en la biblioteca.' },
  { icon: Users, time: '17:00 - 19:00', title: 'Cena Comunitaria', description: 'Cena elegante en compañía, con conversación y entretenimiento ligero.' },
  { icon: Moon, time: '19:00 - 21:00', title: 'Noche Serena', description: 'Películas, música relajante, lectura o tiempo tranquilo en las áreas comunes.' },
];

const VidaComunidad = () => {
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
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Vida en Comunidad</span>
              <h1 className="heading-xl mt-4 mb-6">
                Descubre el Día a Día en <span className="text-primary">Bearspaw</span>
              </h1>
              <p className="body-lg mb-8">
                Cada día en Bearspaw está lleno de propósito, conexión y alegría. Desde el amanecer hasta la noche, creamos experiencias que hacen que la vida sea verdaderamente significativa.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Vive la Experiencia
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={commonRoom} alt="Vida diaria en Bearspaw" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Un Día en <span className="text-primary">Bearspaw</span>
            </h2>
            <p className="body-lg">Cada momento está cuidadosamente pensado para ofrecer equilibrio entre actividad y descanso, socialización y tranquilidad.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {daySchedule.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-sans text-sm font-medium text-primary">{item.time}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg mb-6">Nuestros <span className="text-primary">Espacios</span></h2>
            <p className="body-lg">Instalaciones diseñadas con calidez y elegancia para sentirse como en casa.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: heroGarden, label: 'Jardines y Terrazas' },
              { src: commonRoom, label: 'Sala de Estar Común' },
              { src: wellnessRoom, label: 'Sala de Bienestar' },
              { src: natureTrail, label: 'Senderos Naturales' },
            ].map((img, index) => (
              <motion.div key={img.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative rounded-[20px] overflow-hidden shadow-card group">
                <img src={img.src} alt={img.label} className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <p className="absolute bottom-4 left-4 font-serif text-xl font-semibold text-primary-foreground">{img.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="heading-lg mb-6">¿Quieres Conocer Bearspaw <span className="text-primary">en Persona</span>?</h2>
            <p className="body-lg mb-10">Te invitamos a pasar un día con nosotros y descubrir lo que hace especial a nuestra comunidad.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14035550123" className="btn-primary">Llamar (403) 555-0123</a>
              <Link to="/contacto" className="btn-secondary">Solicitar Visita</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VidaComunidad;
