import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layanan from './components/Layanan';
import CaraKerja from './components/CaraKerja';
import Keunggulan from './components/Keunggulan';
import FormPesan from './components/FormPesan';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Layanan />
        <CaraKerja />
        <Keunggulan />
        <FormPesan />
      </main>
      <Footer />
    </div>
  );
}
