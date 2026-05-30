import SEO from './components/SEO';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import Brosur from './components/Brosur';
import Layanan from './components/Layanan';
import Pricing from './components/Pricing';
import Portofolio from './components/Portofolio';
import Testimoni from './components/Testimoni';
import FAQ from './components/FAQ';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Brosur />
        <Pricing />
        <Layanan />
        <Portofolio />
        <Testimoni />
        <FAQ />
        <Kontak />
      </main>
      <BottomNav />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
