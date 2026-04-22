import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5516997765577"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      aria-label="Falar conosco no WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
    </motion.a>
  );
}
