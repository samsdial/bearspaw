import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contacto = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-8 bg-card">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-8">
            <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">Contacto</span>
            <h1 className="heading-xl mt-4 mb-6">
              Estamos Aquí para <span className="text-primary">Ti</span>
            </h1>
            <p className="body-lg">
              Nos encantaría responder tus preguntas y mostrarte todo lo que Bearspaw tiene para ofrecer. Agenda una visita personal hoy.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contacto;
