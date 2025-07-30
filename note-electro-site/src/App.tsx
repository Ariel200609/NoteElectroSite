import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Brands from './components/sections/Brands';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
