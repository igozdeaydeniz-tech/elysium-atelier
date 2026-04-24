import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Ana Sayfa', href: 'home' },
  { name: 'Hizmetler', href: 'services' },
  { name: 'Hakkımızda', href: 'about' },
  { name: 'İletişim', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bordo-950/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Elysium Atelier" 
              className="w-12 h-12 rounded-xl object-cover border border-gold-500/30 group-hover:border-gold-400 transition-all duration-300"/>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-stone-300 hover:text-gold-400 transition-colors duration-300 group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-bordo-500 to-gold-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-bordo-700 to-bordo-600 text-gold-400 rounded-full text-sm font-semibold border border-gold-500/30 hover:border-gold-400 transition-all duration-300">
              Teklif Al
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gold-400 hover:text-gold-300 transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bordo-950/95 backdrop-blur-xl border-t border-gold-500/10">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-lg text-stone-300 hover:text-gold-400 transition-colors py-2">
                  {link.name}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-bordo-700 to-bordo-600 text-gold-400 rounded-full font-semibold border border-gold-500/30 mt-4">
                Teklif Al
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
