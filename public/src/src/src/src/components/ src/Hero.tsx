import { motion } from 'framer-motion';
import { ArrowRight, Clock, DollarSign, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="AI Neural Network" className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-bordo-950/80 via-bordo-950/60 to-[#0d0a0b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-bordo-950/90 via-transparent to-bordo-950/90" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-bordo-700/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600/20 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
            <img src="/images/logo.png" alt="Elysium Atelier" className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain"/>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-bordo mb-8">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-300">Fiziksel Çekim Gerektirmeyen Dijital Prodüksiyon</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stüdyo, model ve çekim maliyetlerine girmeden, dünya standartlarında görseller üretiyoruz.
            Yapay zeka destekli prodüksiyon modelimizle markanıza özel karakterler ve imkansız sahneler tasarlıyoruz.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex justify-center">
            <button onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-bordo-950 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30">
              <span className="relative z-10 flex items-center gap-2">
                İletişime Geç
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl glass-bordo border-luxury text-center">
              <Clock className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Hız</h3>
              <p className="text-sm text-stone-400">Haftalar süren çekim süreçlerini günlere indiriyoruz</p>
            </div>
            <div className="p-6 rounded-2xl glass-bordo border-luxury text-center">
              <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Sınırsızlık</h3>
              <p className="text-sm text-stone-400">Markanıza özel, dünyada eşi olmayan sahneler kurguluyoruz</p>
            </div>
            <div className="p-6 rounded-2xl glass-bordo border-luxury text-center">
              <DollarSign className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Maliyet</h3>
              <p className="text-sm text-stone-400">Ekip ve stüdyo organizasyon maliyetlerini ortadan kaldırıyoruz</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
