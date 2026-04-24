import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Users, Target, Heart } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'AI Teknolojisi', description: 'En güncel AI araçları ile hızlı ve yenilikçi çözümler' },
  { icon: Users, title: 'Uzman Ekip', description: 'İlksen Aydeniz & Tuğba Özçetin ile profesyonel çalışmalar' },
  { icon: Target, title: 'Sonuç Odaklı', description: 'Her projede ölçülebilir başarı hedefleri' },
];

const stats = [
  { value: '100+', label: 'Proje' },
  { value: '50+', label: 'Mutlu Müşteri' },
  { value: '2+', label: 'Yıllık Deneyim' },
  { value: '24/7', label: 'Destek' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a0b] via-bordo-950/20 to-[#0d0a0b]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bordo-700/15 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="/images/studio.jpg" alt="Elysium Atelier" className="w-full h-[500px] object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-bordo-950/80 via-transparent to-transparent" />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 p-6 rounded-2xl glass-bordo border-luxury max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-bordo-950" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-gradient-gold">100%</div>
                  <div className="text-sm text-stone-400">Müşteri Memnuniyeti</div>
                </div>
              </div>
              <p className="text-xs text-stone-500">Her proje zamanında ve bütçe dahilinde teslim edilir.</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bordo mb-6">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-gold-300">Hakkımızda</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Tasarımda</span><br/>
              <span className="text-gradient-gold">Yeni Bir Çağ</span>
            </h2>

            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Elysium Atelier olarak, yapay zeka teknolojilerini yaratıcı tasarım süreçleriyle 
              birleştirerek markalar için benzersiz görsel deneyimler oluşturuyoruz. 
              Stüdyo, model ve çekim maliyetlerine girmeden, dünya standartlarında görseller üretiyoruz.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bordo-700 to-bordo-800 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-stone-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 rounded-xl glass-bordo border-luxury mb-8">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-bordo-500" />
                <div>
                  <p className="text-sm text-stone-400">Kurucular</p>
                  <p className="font-serif text-lg text-gold-400">İlksen Aydeniz & Tuğba Özçetin</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-bordo-950/50 border border-bordo-700/20">
                  <div className="font-serif text-2xl font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-xs text-stone-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
