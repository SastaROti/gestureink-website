import { motion } from 'framer-motion';
import AnimatedGesture from './AnimatedGesture';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Clean center eye - no overlapping elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <motion.div
            className="relative inline-block"
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            <AnimatedGesture type="slowBlink" size={180} color="#8B5CF6" autoPlay />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-8 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h1 
            className="text-6xl md:text-8xl font-black leading-[1.04] mb-6"
            style={{
              background: 'linear-gradient(135deg, #D4D0E6 0%, #8B5CF6 50%, #D4D0E6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.6px'
            }}
          >
            GestureInk
          </h1>
        </motion.div>
        
        <motion.h2
          className="text-4xl md:text-5xl font-black leading-tight text-[#F4F1FF] mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Scroll with your soul,
          <br />
          not your thumb.
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl font-semibold text-[#ADA8BE] max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          A gesture-led extension for Instagram Reels. Blink to scroll. Nod to navigate.
          Experience hands-free scrolling powered by your eyes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a
            href="#download"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-[22px] font-bold text-lg text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #6D3FD4 100%)',
              boxShadow: '0 10px 26px rgba(139, 92, 246, 0.3)'
            }}
          >
            <span className="relative z-10">Begin Your Journey</span>
            <span className="relative z-10 text-2xl">👁️</span>
            
            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#6D3FD4] to-[#8B5CF6]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>
        
        <motion.div
          className="mt-16 flex items-center justify-center gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
            <span className="text-sm font-semibold text-[#ADA8BE]">Android Only</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            <span className="text-sm font-semibold text-[#ADA8BE]">100% Privacy First</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E2C46D]" />
            <span className="text-sm font-semibold text-[#ADA8BE]">Powered by ML Kit</span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="text-xs font-semibold text-[#ADA8BE] uppercase tracking-wider">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
