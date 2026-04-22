import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-unika-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className={`text-2xl font-serif font-bold tracking-wider uppercase transition-colors ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            Unika<span className="text-unika-green text-3xl leading-none">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-unika-green transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5516997765577"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-unika-green text-unika-black px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-unika-green transition-all duration-300"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-unika-black shadow-xl transition-all duration-300 origin-top overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'
      }`}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg tracking-wider hover:text-unika-green transition-colors font-serif"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5516997765577"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-unika-green text-unika-black text-center px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider mt-4"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
