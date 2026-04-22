import { motion } from 'motion/react';
import { Factory, PencilRuler, Diamond, UserCheck, ShieldCheck, Clock } from 'lucide-react';

const differentials = [
  {
    icon: <Factory size={32} strokeWidth={1.5} />,
    title: 'Fabricação Própria',
    desc: 'Controle total de qualidade em nosso parque fabril de 1000m².',
  },
  {
    icon: <PencilRuler size={32} strokeWidth={1.5} />,
    title: 'Projeto Personalizado',
    desc: 'Adaptamos cada detalhe ao seu espaço, estilo e necessidade.',
  },
  {
    icon: <Diamond size={32} strokeWidth={1.5} />,
    title: 'Alto Padrão',
    desc: 'Acabamentos impecáveis e materiais selecionados.',
  },
  {
    icon: <UserCheck size={32} strokeWidth={1.5} />,
    title: 'Atendimento Especializado',
    desc: 'Equipe pronta para entender e materializar seus sonhos.',
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Entrega Profissional',
    desc: 'Montagem limpa, ágil e executada por especialistas.',
  },
  {
    icon: <Clock size={32} strokeWidth={1.5} />,
    title: 'Mais de 10 anos',
    desc: 'De tradição, confiança e projetos bem-sucedidos.',
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 bg-unika-black text-white selection:bg-unika-green selection:text-unika-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-unika-green"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/70">Diferenciais Unika</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white max-w-xl">
              Por que escolher a <br/>
              <span className="italic text-unika-green">Unika Planejados?</span>
            </h2>
          </div>
          <p className="text-white/60 font-light max-w-sm">
            Nossa dedicação à excelência e ao design de alto nível garante que cada projeto seja uma obra-prima única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="text-unika-green shrink-0 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
