import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Móveis Planejados',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=2070',
    delay: 0.1,
  },
  {
    title: 'Kit Porta Pronta',
    image: 'https://images.unsplash.com/photo-1506440905961-0ab11add14fa?auto=format&fit=crop&q=80&w=2070',
    delay: 0.2,
  },
  {
    title: 'Madeira Plástica para Deck',
    image: 'https://images.unsplash.com/photo-1599427303058-f04cbcc4ec2b?auto=format&fit=crop&q=80&w=2071',
    delay: 0.3,
  },
  {
    title: 'Pergolado',
    image: 'https://images.unsplash.com/photo-1627446187932-a5e2f9d50ad8?auto=format&fit=crop&q=80&w=2070',
    delay: 0.4,
  },
  {
    title: 'Ripado',
    image: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&fit=crop&q=80&w=2065',
    delay: 0.5,
  },
  {
    title: 'Teto Vinílico',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069',
    delay: 0.6,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-unika-green"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-unika-dark">Soluções Premium</span>
            <div className="w-12 h-[1px] bg-unika-green"></div>
          </div>
          <h2 className="text-4xl md:text-5xl text-unika-black">
            Nossos <span className="italic text-unika-green">Produtos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: product.delay }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-unika-light">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay that darkens slightly on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              </div>
              
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-serif text-unika-black group-hover:text-unika-green transition-colors duration-300">
                  {product.title}
                </h3>
                <a 
                  href="https://wa.me/5516997765577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-unika-dark/20 flex items-center justify-center text-unika-dark group-hover:bg-unika-green group-hover:border-unika-green group-hover:text-unika-black transition-all duration-300 shrink-0"
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
