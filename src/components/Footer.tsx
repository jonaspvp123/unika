import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0a0a0a] text-white pt-24 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <span className="text-3xl font-serif font-bold tracking-wider uppercase inline-block mb-6">
              Unika<span className="text-unika-green text-4xl leading-none">.</span>
            </span>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Especialistas em móveis planejados, kit porta pronta, teto vinílico e acabamentos amadeirados para transformar o seu espaço com excelência.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Início', 'Empresa', 'Produtos', 'Projetos', 'Depoimentos'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-unika-green text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contato</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Phone className="text-unika-green shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="block text-white/50 text-xs uppercase tracking-wider font-semibold mb-1">WhatsApp</span>
                    <a href="https://wa.me/5516997765577" className="text-white hover:text-unika-green text-sm transition-colors">(16) 99776-5577</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="text-unika-green shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="block text-white/50 text-xs uppercase tracking-wider font-semibold mb-1">Telefone Fixo</span>
                    <a href="tel:+551632146220" className="text-white hover:text-unika-green text-sm transition-colors">(16) 3214-6220</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="text-unika-green shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="block text-white/50 text-xs uppercase tracking-wider font-semibold mb-1">E-mail</span>
                    <a href="mailto:augusto@unikaplanejados.com.br" className="text-white hover:text-unika-green text-sm transition-colors">augusto@unikaplanejados.com.br</a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Redes Sociais</h4>
              <p className="text-white/50 text-sm font-light mb-6">Siga-nos para acompanhar nossos últimos projetos e novidades.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-unika-green hover:border-unika-green hover:text-unika-black transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-unika-green hover:border-unika-green hover:text-unika-black transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-unika-green hover:border-unika-green hover:text-unika-black transition-all duration-300">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Unika Planejados LTDA. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1 opacity-50">
            Araraquara / SP
          </p>
        </div>
      </div>
    </footer>
  );
}
