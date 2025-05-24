import Header from './components/Header';
import Hero from './components/Hero';
import SocialContact from './components/SocialContact';
import ParternLogo from './components/ParternLogo';
import GloabFeacture from './components/GloabFeacture';
import AdvertisingShowcase from './components/AdvertisingShowcase';
import Services from './components/Services';
import Testimonials from './components/testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <SocialContact />
      <ParternLogo />
      <GloabFeacture />
      <AdvertisingShowcase />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;