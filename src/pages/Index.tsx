import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <Philosophy />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
