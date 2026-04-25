import { Sparkles, Heart, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-bordo-950 to-[#0d0a0b]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="Elysium Atelier" 
                className="w-14 h-14 rounded-xl object-cover border border-gold-500/30"/>
            </a>
            <p className="text-stone-500 leading-relaxed max-w-sm mb-4">
              AI teknolojisi ile markanızı geleceğe taşıyoruz. Fiziksel çekim gerektirmeyen 
              dijital prodüksiyon ve yaratıcı tasarım çözümleri.
            </p>
            <p className="text-sm text-stone-600">
              <span className="text-gold-500">İlksen Aydeniz</span> & <span className="text-gold-500">Tuğba Özçetin</span>
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {[{ name: 'Ana Sayfa', href: '#home' }, { name: 'Hizmetler', href: '#services' },
                { name: 'Hakkımızda', href: '#about' }, { name: 'İletişim', href: '#contact' }].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-stone-500 hover:text-gold-400 transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Hizmetler</h4>
            <ul className="space-y-3">
              {['AI Dijital Prodüksiyon', 'Video & Görsel', 'Sosyal Medya', 'Web Tasarım', 'Meta Reklam'].map((service) => (
                <li key={service}><span className="text-stone-500 text-sm">{service}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-bordo-700/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-sm">© 2024 Elysium Atelier. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/elysiumatelierr" target="_blank" rel="noopener noreferrer"
              className="text-stone-600 hover:text-gold-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="mailto:elysiumatelier@outlook.com" className="text-stone-600 hover:text-gold-400 transition-colors">
              <Mail className="w-5 h-5" /></a>
            <a href="tel:+905453971988" className="text-stone-600 hover:text-gold-400 transition-colors">
              <Phone className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
