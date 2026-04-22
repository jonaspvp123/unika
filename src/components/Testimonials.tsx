import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Carolina Mendes',
    role: 'Arquiteta',
    text: 'A parceria com a Unika Planejados elevou o nível dos meus projetos. A precisão na entrega do kit porta pronta e o acabamento dos painéis ripados são simplesmente impecáveis. Recomendo de olhos fechados.',
  },
  {
    name: 'Roberto & Juliana',
    role: 'Clientes Residenciais',
    text: 'Transformaram nossa casa! A cozinha ficou exatamente como sonhávamos, com materiais de altíssima qualidade. O atendimento do Augusto e equipe foi excepcional do primeiro contato até a montagem final.',
  },
  {
    name: 'Dr. Fernando Mello',
    role: 'Clínica Odontológica',
    text: 'Precisávamos de um ambiente sofisticado para nossa clínica. A Unika superou as expectativas na recepção e consultórios. Cumpriram o prazo rigorosamente e o ambiente hoje transmite a confiança que queríamos.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <div className="flex justify-center mb-12 text-unika-green/30">
          <Quote size={80} strokeWidth={1} />
        </div>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <p className="text-xl md:text-3xl text-unika-dark font-serif italic leading-relaxed mb-8 text-balance">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center">
                <span className="font-bold text-unika-black uppercase tracking-widest text-sm mb-1">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-xs text-unika-dark/60 uppercase tracking-widest">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-unika-dark/10 flex items-center justify-center text-unika-dark hover:bg-unika-green hover:border-unika-green hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-unika-green w-8' : 'bg-unika-dark/20'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-unika-dark/10 flex items-center justify-center text-unika-dark hover:bg-unika-green hover:border-unika-green hover:text-white transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
