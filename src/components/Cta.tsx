import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Cta() {
  return (
    <section className="relative py-32 bg-unika-black flex items-center justify-center overflow-hidden">
      {/* Background elegant pattern or simple gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-unika-green/30 to-transparent blur-3xl transform -skew-x-12" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-unika-green/30 to-transparent blur-3xl transform -skew-x-12" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6 font-serif">
            Vamos transformar seu ambiente?
          </h2>
          
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto text-balance">
            Solicite agora seu orçamento e fale com nossos especialistas. Projetos únicos com a assinatura Unika Planejados.
          </p>
          
          <a
            href="https://wa.me/5516997765577"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-unika-green text-unika-black px-10 py-5 rounded-sm text-lg font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(169,201,74,0.4)]"
          >
            <MessageCircle size={24} />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
