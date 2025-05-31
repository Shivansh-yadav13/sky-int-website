import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import BrandCarousel from "./components/BrandCarousel";
import FeaturesShowcase from "./components/FeaturesShowcase";
import SmartSaveFeatures from "./components/SmartSaveFeatures";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
        <BrandCarousel />
        <FeaturesShowcase />
        <SmartSaveFeatures />
        <FAQ />
        <ContactSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
