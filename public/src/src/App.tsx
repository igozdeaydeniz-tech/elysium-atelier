import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0d0a0b] text-white overflow-x-hidden">
      <motion.div
        className="fixed w-[400px] h-[400px] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        style={{
          background: 'radial-gradient(circle, rgba(201, 149, 7, 0.15) 0%, transparent 70%)',
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
