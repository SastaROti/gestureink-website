import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function BootAnimation({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState(1); // 1: eye, 2: quote

  useEffect(() => {
    // Phase 1: Eye animation (0-2.5s)
    const phase1Timer = setTimeout(() => setPhase(2), 2500);
    
    // Complete and exit (5s total)
    const completeTimer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 5000);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] overflow-hidden"
        >
          {/* ANIMATED WAVE BACKGROUND */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave1Boot" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="wave2Boot" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E87BA8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#E87BA8" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="wave3Boot" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6272D9" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6272D9" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M0,100 L0,40 Q25,20 50,45 T100,40 L100,100 Z"
              fill="url(#wave1Boot)"
              animate={{ d: ["M0,100 L0,40 Q25,20 50,45 T100,40 L100,100 Z", "M0,100 L0,40 Q25,50 50,30 T100,40 L100,100 Z"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            
            <motion.path
              d="M0,100 L0,55 Q25,40 50,58 T100,55 L100,100 Z"
              fill="url(#wave2Boot)"
              animate={{ d: ["M0,100 L0,55 Q25,40 50,58 T100,55 L100,100 Z", "M0,100 L0,55 Q25,65 50,48 T100,55 L100,100 Z"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            
            <motion.path
              d="M0,100 L0,70 Q25,60 50,72 T100,70 L100,100 Z"
              fill="url(#wave3Boot)"
              animate={{ d: ["M0,100 L0,70 Q25,60 50,72 T100,70 L100,100 Z", "M0,100 L0,70 Q25,78 50,65 T100,70 L100,100 Z"] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </svg>

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#08080C] via-[#1a0a2e] to-[#08080C]" style={{ mixBlendMode: 'multiply' }} />

          {/* PHASE 1: EYE ANIMATION */}
          <AnimatePresence>
            {phase === 1 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ 
                    scale: [0.2, 1.2, 1],
                    opacity: [0, 1, 1]
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.6, 1],
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <svg width="400" height="300" viewBox="0 0 400 300">
                    <defs>
                      <radialGradient id="eyeGlowBoot">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                      </radialGradient>
                      <filter id="blurBoot">
                        <feGaussianBlur stdDeviation="20" />
                      </filter>
                      <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="50%" stopColor="#E87BA8" />
                        <stop offset="100%" stopColor="#6272D9" />
                      </linearGradient>
                    </defs>
                    
                    {/* Multiple glow layers */}
                    <ellipse cx="200" cy="150" rx="140" ry="90" fill="url(#eyeGlowBoot)" filter="url(#blurBoot)" />
                    <ellipse cx="200" cy="150" rx="120" ry="75" fill="url(#eyeGlowBoot)" filter="url(#blurBoot)" opacity="0.6" />
                    
                    {/* Eyebrow with glow */}
                    <motion.rect
                      x="125" y="45" width="150" height="12" rx="6"
                      fill="url(#eyeGrad)"
                      filter="url(#blurBoot)"
                      animate={{ y: [45, 38, 45] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Eye shape - gradient stroke */}
                    <path
                      d="M60,150 Q120,100 200,100 T340,150 Q280,200 200,200 T60,150 Z"
                      fill="none"
                      stroke="url(#eyeGrad)"
                      strokeWidth="5"
                    />
                    <path
                      d="M60,150 Q120,100 200,100 T340,150 Q280,200 200,200 T60,150 Z"
                      fill="url(#eyeGlowBoot)"
                      opacity="0.15"
                    />
                    
                    {/* Pupil with intense glow */}
                    <motion.circle
                      cx="200" cy="150" r="35"
                      fill="url(#eyeGrad)"
                      filter="url(#blurBoot)"
                      animate={{ 
                        r: [35, 35, 5, 35],
                        opacity: [1, 1, 0.3, 1]
                      }}
                      transition={{ duration: 2.5, times: [0, 0.4, 0.5, 1], repeat: Infinity }}
                    />
                    
                    {/* Light reflections */}
                    <motion.circle
                      cx="185" cy="135" r="12"
                      fill="white"
                      animate={{ opacity: [1, 1, 0, 1] }}
                      transition={{ duration: 2.5, times: [0, 0.4, 0.5, 1], repeat: Infinity }}
                    />
                    <motion.circle
                      cx="215" cy="155" r="6"
                      fill="white"
                      opacity="0.7"
                      animate={{ opacity: [0.7, 0.7, 0, 0.7] }}
                      transition={{ duration: 2.5, times: [0, 0.4, 0.5, 1], repeat: Infinity }}
                    />
                    
                    {/* Particle sparkles - Optimized to 6 */}
                    {[...Array(6)].map((_, i) => (
                      <motion.circle
                        key={i}
                        cx={200 + Math.cos(i * Math.PI / 3) * 100}
                        cy={150 + Math.sin(i * Math.PI / 3) * 100}
                        r="3"
                        fill="white"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          delay: i * 0.25,
                          repeat: Infinity 
                        }}
                      />
                    ))}
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PHASE 2: QUOTE */}
          <AnimatePresence>
            {phase === 2 && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center px-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="text-center max-w-3xl"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <motion.p
                    className="text-4xl md:text-6xl font-black leading-tight mb-4"
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #E87BA8 50%, #6272D9 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    "Your eyes just got
                    <br />
                    a promotion"
                  </motion.p>
                  
                  <motion.div
                    className="flex items-center justify-center gap-2 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <div className="h-1 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
                    <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">GestureInk</span>
                    <div className="h-1 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
