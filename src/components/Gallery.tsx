import { motion } from 'motion/react';

const galleryItems = [
  { img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070', label: 'Cozinhas Planejadas', aspect: 'aspect-square' },
  { img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2080', label: 'Quartos Planejados', aspect: 'aspect-[3/4]' },
  { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2067', label: 'Salas Modernas', aspect: 'aspect-[4/3]' },
  { img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070', label: 'Áreas Gourmet', aspect: 'aspect-auto h-[400px]' },
  { img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=2067', label: 'Decks Externos', aspect: 'aspect-square' },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2053', label: 'Tetos Vinílicos', aspect: 'aspect-[3/4]' },
];

export default function Gallery() {
  return (
    <section id="projetos" className="py-24 bg-unika-light">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-unika-green"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-unika-dark">Nosso Portfólio</span>
            <div className="w-12 h-[1px] bg-unika-green"></div>
          </div>
          <h2 className="text-4xl md:text-5xl text-unika-black">
            Galeria de <span className="italic text-unika-green">Projetos</span>
          </h2>
        </div>

        {/* Pinterest style masonry-like grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="relative group overflow-hidden rounded-sm break-inside-avoid bg-white"
            >
              <div className={`w-full ${item.aspect} overflow-hidden`}>
                <img 
                  src={item.img} 
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-unika-black/80 via-unika-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white text-xl font-serif tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
