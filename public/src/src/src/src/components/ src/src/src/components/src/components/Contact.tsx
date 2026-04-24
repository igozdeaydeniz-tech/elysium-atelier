import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xaqavnay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch {
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0a0b]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bordo-700/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bordo mb-6">
            <MessageCircle className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-300">İletişim</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Projenizi</span>{' '}
            <span className="text-gradient-gold">Konuşalım</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Danışmanlık için hemen iletişime geçin. Size en uygun çözümü birlikte belirleyelim.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl glass-bordo border-luxury">
              <h3 className="font-serif text-xl font-semibold text-white mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-5">
                <a href="mailto:elysiumatelier@outlook.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bordo-700 to-bordo-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">E-posta</div>
                    <div className="text-white group-hover:text-gold-400 transition-colors">elysiumatelier@outlook.com</div>
                  </div>
                </a>

                <a href="tel:+905453971988" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bordo-700 to-bordo-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Telefon</div>
                    <div className="text-white group-hover:text-gold-400 transition-colors">+90 545 397 19 88</div>
                  </div>
                </a>

                <a href="tel:+905452538316" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bordo-700 to-bordo-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Telefon</div>
                    <div className="text-white group-hover:text-gold-400 transition-colors">+90 545 253 83 16</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bordo-700 to-bordo-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Konum</div>
                    <div className="text-white">Ankara, Türkiye</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-bordo-700/30">
                <div className="text-sm text-stone-500 mb-4">Sosyal Medya</div>
                <div className="flex gap-3">
                  <a href="https://instagram.com/elysiumatelierr" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-bordo-700 to-bordo-800 flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-gold-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-bordo border-luxury">
              <h4 className="font-serif text-lg font-semibold text-white mb-4">Çalışma Saatleri</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Pazartesi - Cuma</span>
                  <span className="text-gold-400">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Cumartesi</span>
                  <span className="text-gold-400">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Pazar</span>
                  <span className="text-stone-600">Kapalı</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-bordo border-luxury">
              <h3 className="font-serif text-xl font-semibold text-white mb-6">Teklif Formu</h3>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-stone-400 mb-2">Ad Soyad *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-bordo-950/50 border border-bordo-700/30 rounded-xl text-white placeholder-stone-600 focus:border-gold-500/50 focus:outline-none transition-colors"
                    placeholder="Adınız Soyadınız"/>
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-2">E-posta *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-bordo-950/50 border border-bordo-700/30 rounded-xl text-white placeholder-stone-600 focus:border-gold-500/50 focus:outline-none transition-colors"
                    placeholder="ornek@email.com"/>
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-2">Telefon</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-bordo-950/50 border border-bordo-700/30 rounded-xl text-white placeholder-stone-600 focus:border-gold-500/50 focus:outline-none transition-colors"
                    placeholder="+90 5XX XXX XX XX"/>
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-2">Hizmet Türü *</label>
                  <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-bordo-950/50 border border-bordo-700/30 rounded-xl text-white focus:border-gold-500/50 focus:outline-none transition-colors">
                    <option value="">Seçiniz</option>
                    <option value="ai">AI Dijital Prodüksiyon</option>
                    <option value="video">Video & Görsel Üretimi</option>
                    <option value="reklam">Reklam Çalışmaları</option>
                    <option value="social">Sosyal Medya Yönetimi</option>
                    <option value="web">Web Sitesi Tasarımı</option>
                    <option value="meta">Meta Reklam Yönetimi</option>
                    <option value="katalog">Katalog Tasarımı</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm text-stone-400 mb-2">Mesajınız *</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-bordo-950/50 border border-bordo-700/30 rounded-xl text-white placeholder-stone-600 focus:border-gold-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Projeniz hakkında bilgi verin..."/>
              </div>

              <button type="submit"
                className="mt-6 w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-bordo-950 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20">
                <Send className="w-5 h-5" />
                Mesaj Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
