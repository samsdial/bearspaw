import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, Bell, HeartPulse, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import commonRoom from '@/assets/common-room.jpg';

const features = [
  {
    icon: Lock,
    title: 'Acceso Controlado',
    description: 'Sistemas de entrada seguros con tecnología de última generación que garantizan la protección de todos nuestros residentes sin sacrificar la calidez del hogar.',
  },
  {
    icon: Eye,
    title: 'Monitoreo 24/7',
    description: 'Personal de vigilancia capacitado las 24 horas del día, los 7 días de la semana, con protocolos de respuesta rápida ante cualquier situación.',
  },
  {
    icon: Bell,
    title: 'Sistema de Alertas',
    description: 'Cada habitación cuenta con sistema de llamada de emergencia conectado directamente con nuestro equipo de cuidado profesional.',
  },
  {
    icon: HeartPulse,
    title: 'Atención Médica',
    description: 'Enfermeras registradas disponibles en todo momento, con planes de cuidado individualizados y seguimiento médico continuo.',
  },
  {
    icon: Users,
    title: 'Personal Capacitado',
    description: 'Nuestro equipo recibe formación continua en protocolos de seguridad, primeros auxilios y manejo de situaciones de emergencia.',
  },
  {
    icon: Shield,
    title: 'Protocolos de Seguridad',
    description: 'Planes de evacuación, simulacros regulares y coordinación con servicios de emergencia locales para máxima protección.',
  },
];

const Seguridad = () => {
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
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Seguridad</span>
              <h1 className="heading-xl mt-4 mb-6">
                Protección y <span className="text-primary">Tranquilidad</span>
              </h1>
              <p className="body-lg mb-8">
                En Bearspaw, la seguridad de nuestros residentes es nuestra máxima prioridad. Combinamos tecnología avanzada con atención humana dedicada para crear un entorno donde todos se sienten protegidos y en paz.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Conoce Nuestros Protocolos
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-[20px] overflow-hidden shadow-elevated">
              <img src={commonRoom} alt="Área común segura en Bearspaw" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Nuestro Compromiso con la <span className="text-primary">Seguridad</span>
            </h2>
            <p className="body-lg">Cada detalle de nuestras instalaciones está diseñado pensando en la protección y el bienestar de quienes más importan.</p>
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
            <h2 className="heading-lg mb-6">¿Deseas conocer más sobre nuestra <span className="text-primary">seguridad</span>?</h2>
            <p className="body-lg mb-10">Agenda una visita y conoce de primera mano nuestras instalaciones y protocolos de seguridad.</p>
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

export default Seguridad;
