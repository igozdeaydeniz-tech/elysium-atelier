import { motion } from 'framer-motion';
import { Palette, Monitor, Smartphone, Camera, Video, Sparkles, ArrowRight, Target, Megaphone } from 'lucide-react';

const services = [
  { icon: Camera, title: 'AI Dijital Prodüksiyon', description: 'Fiziksel çekim gerektirmeden, markanıza özel model karakterleri ve imkansız sahneler üretiyoruz.', features: ['Model Karakterleri', 'Konsept Görseller', 'Ürün Fotoları'] },
  { icon: Video, title: 'Video & Görsel Üretimi', description: 'AI destekli video içerikleri ve görseller ile markanızı etkileyici bir şekilde sunuyoruz.', features: ['Tanıtım Videoları', 'Sosyal Medya', 'Reels İçerikleri'] },
  { icon: Megaphone, title: 'Reklam Çalışmaları', description: 'Dijital reklam kampanyaları için etkileyici görseller ve videolar hazırlıyoruz.', features: ['Kampanya Görselleri', 'Banner Tasarımı', 'Video Reklamlar'] },
  { icon: Smartphone, title: 'Sosyal Medya Yönetimi', description: 'Instagram, Facebook ve diğer platformlar için profesyonel içerik yönetimi sunuyoruz.', features: ['İçerik Üretimi', 'Post Planlaması', 'Etkileşim Yönetimi'] },
  { icon: Monitor, title: 'Web Sitesi Tasarımı', description: 'Modern, responsive ve SEO uyumlu web siteleri ile dijital varlığınızı güçlendirin.', features: ['Landing Page', 'Kurumsal Site', 'E-Ticaret'] },
  { icon: Target, title: 'Meta Reklam Yönetimi', description: 'Facebook ve Instagram reklamlarınızı optimize ederek hedef kitlenize ulaşmanızı sağlıyoruz.', features: ['Hedefleme', 'Optimizasyon', 'Raporlama'] },
  { icon: Palette, title: 'Katalog Tasarımı', description: 'Ürün kataloglarınızı profesyonel ve etkileyici bir şekilde tasarlıyoruz.', features: ['Dijital Katalog', 'Lookbook', 'Ürün Kataloğu'] },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a0b] via-bordo-950/30 to-[#0d0a0b]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-bordo-700/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bordo mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-300">Hizmetlerimiz</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Size Nasıl</span>{' '}
            <span className="text-gradient-gold">Yardım Edebiliriz?</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            AI teknolojisi ve yaratıcı vizyonumuzla markanızı bir sonraki seviyeye taşıyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl border-luxury bg-gradient-to-b from-bordo-950/50 to-transparent hover:from-bordo-900/50 transition-all duration-500">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-bordo-700 to-bordo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.features.map((feature, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs bg-bordo-800/50 text-gold-400/80 rounded-full border border-gold-500/10">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 text-gold-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
