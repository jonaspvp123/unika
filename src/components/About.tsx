import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="empresa" className="py-24 bg-unika-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-unika-green"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-unika-dark">Nossa História</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl text-unika-black mb-8 text-balance">
              Tradição e inovação em <span className="italic text-unika-green">cada detalhe</span>
            </h2>
            
            <p className="text-lg text-unika-dark/80 font-light leading-relaxed mb-8">
              Fundada em 2014, a Unika Planejados nasceu como uma pequena marcenaria e hoje conta com um parque fabril de mais de 1000m², entregando soluções personalizadas com alto padrão de acabamento.
            </p>
            <p className="text-lg text-unika-dark/80 font-light leading-relaxed">
              Nossa missão é materializar o sonho de ambientes perfeitos, unindo design sofisticado, materiais premium e uma execução impecável. Do projeto à entrega, nossa equipe de especialistas garante uma experiência única e resultados que superam expectativas.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-serif text-unika-green mb-2">+10</span>
                <span className="text-sm uppercase tracking-wider text-unika-dark/70 font-semibold">Anos de Mercado</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-unika-green mb-2">1000m²</span>
                <span className="text-sm uppercase tracking-wider text-unika-dark/70 font-semibold">Parque Fabril</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1663524789647-73d706536b36?auto=format&fit=crop&q=80&w=1471" 
                alt="Fábrica da Unika Planejados"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-unika-black/10 transition-colors group-hover:bg-transparent duration-500" />
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs hidden sm:block">
              <p className="font-serif text-xl italic text-unika-black leading-snug">
                "O design e a funcionalidade esculpidos em formas perfeitas."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-unika-green"></div>
                <span className="text-xs uppercase font-bold tracking-widest text-unika-dark/60">Augusto, Fundador</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
