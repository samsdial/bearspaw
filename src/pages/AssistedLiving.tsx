import { motion } from 'framer-motion';
import { ArrowLeft, Home, Utensils, Shirt, Pill, Accessibility, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import commonRoom from '@/assets/common-room.jpg';
import wellnessRoom from '@/assets/wellness-room.jpg';

const features = [
  {
    icon: HeartHandshake,
    title: 'Asistencia Personalizada',
    description: 'Planes de cuidado individualizados que se adaptan a las necesidades cambiantes de cada residente, manteniendo su independencia.',
  },
  {
    icon: Pill,
    title: 'Gestión de Medicamentos',
    description: 'Administración y supervisión profesional de medicamentos con seguimiento personalizado y coordinación con médicos.',
  },
  {
    icon: Utensils,
    title: 'Comidas Gourmet',
    description: 'Menús elaborados por chefs con opciones nutricionales personalizadas, servidos en un elegante comedor comunitario.',
  },
  {
    icon: Shirt,
    title: 'Lavandería y Limpieza',
    description: 'Servicios completos de lavandería y limpieza de habitaciones para que nuestros residentes se enfoquen en disfrutar su día.',
  },
  {
    icon: Accessibility,
    title: 'Movilidad y Transporte',
    description: 'Asistencia con movilidad, acompañamiento a citas médicas y transporte programado para actividades fuera de la comunidad.',
  },
  {
    icon: Home,
    title: 'Suites Privadas',
    description: 'Habitaciones amplias y luminosas con baño privado adaptado, diseñadas para sentirse como un verdadero hogar.',
  },
];

const AssistedLiving = () => {
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
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Assisted Living</span>
              <h1 className="heading-xl mt-4 mb-6">
                Independencia con <span className="text-primary">Apoyo</span>
              </h1>
              <p className="body-lg mb-8">
                Nuestro programa de Assisted Living ofrece el equilibrio perfecto entre independencia personal y asistencia profesional, permitiendo que cada residente viva con dignidad y comodidad.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Solicitar Información
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={commonRoom} alt="Sala de estar en Assisted Living Bearspaw" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Todo lo que <span className="text-primary">Necesitas</span>
            </h2>
            <p className="body-lg">Servicios integrales diseñados para hacer la vida más cómoda, segura y placentera.</p>
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
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="heading-lg mb-6">Un Día en <span className="text-primary">Assisted Living</span></h2>
              <p className="body-md mb-6">Cada día está lleno de oportunidades para disfrutar, socializar y vivir con propósito.</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Desayuno preparado por nuestro chef',
                  'Actividades recreativas y sociales',
                  'Ejercicios suaves y caminatas guiadas',
                  'Almuerzo gourmet en comedor comunitario',
                  'Talleres de arte, lectura y música',
                  'Tiempo de descanso y visitas familiares',
                  'Cena elegante y entretenimiento nocturno',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[20px] overflow-hidden shadow-card">
              <img src={wellnessRoom} alt="Actividades en Assisted Living" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="heading-lg mb-6">¿Listo para <span className="text-primary">Conocernos</span>?</h2>
            <p className="body-lg mb-10">Agenda una visita personalizada y descubre por qué las familias confían en Bearspaw para el cuidado de sus seres queridos.</p>
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

export default AssistedLiving;
