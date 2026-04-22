import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax feel (implemented via standard CSS attachment or just fixed) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-unika-black/60 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center md:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 text-balance">
            Ambientes planejados para transformar seu espaço com <span className="text-unika-green italic pr-2">sofisticação</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl text-balance">
            Projetos personalizados em móveis planejados, teto vinílico, kit porta pronta e madeira plástica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center md:justify-start justify-center">
            <a
              href="https://wa.me/5516997765577"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-unika-green text-unika-black px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-unika-green transition-all duration-300"
            >
              Solicitar Orçamento
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#projetos"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Ver Projetos
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-unika-green to-transparent" />
      </motion.div>
    </section>
  );
}
