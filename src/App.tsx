import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Brands from './components/sections/Brands';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';
import FloatingNavbar from './components/ui/FloatingNavbar';
import PowerOnIntro from './components/ui/PowerOnIntro';

function App() {
  return (
    <div className="App">
      <PowerOnIntro />
      <Hero />
      <Services />
      <Brands />
      <About />
      <Work />
      <Contact />
      <Footer />
      <FloatingNavbar />
    </div>
  );
}

export default App;
