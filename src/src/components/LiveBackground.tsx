import { motion } from 'framer-motion';

export default function LiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08080C] via-[#0d0815] to-[#08080C]" />
      
      {/* ANIMATED WAVE LAYERS - ALWAYS MOVING */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave1Live" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="wave2Live" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E87BA8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E87BA8" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="wave3Live" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6272D9" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6272D9" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="wave4Live" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.005" />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Purple - Optimized */}
        <motion.path
          d="M0,100 L0,35 Q15,25 30,40 Q45,55 60,42 Q75,29 90,45 Q105,61 120,47 L120,100 Z"
          fill="url(#wave1Live)"
          animate={{
            d: [
              "M0,100 L0,35 Q15,25 30,40 Q45,55 60,42 Q75,29 90,45 Q105,61 120,47 L120,100 Z",
              "M0,100 L0,35 Q15,45 30,32 Q45,19 60,35 Q75,51 90,38 Q105,25 120,42 L120,100 Z",
              "M0,100 L0,35 Q15,25 30,40 Q45,55 60,42 Q75,29 90,45 Q105,61 120,47 L120,100 Z"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Wave 2 - Pink - Optimized */}
        <motion.path
          d="M0,100 L0,50 Q20,35 40,52 Q60,69 80,54 Q100,39 120,56 L120,100 Z"
          fill="url(#wave2Live)"
          animate={{
            d: [
              "M0,100 L0,50 Q20,35 40,52 Q60,69 80,54 Q100,39 120,56 L120,100 Z",
              "M0,100 L0,50 Q20,62 40,47 Q60,32 80,48 Q100,64 120,50 L120,100 Z",
              "M0,100 L0,50 Q20,35 40,52 Q60,69 80,54 Q100,39 120,56 L120,100 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Wave 3 - Blue - Optimized */}
        <motion.path
          d="M0,100 L0,60 Q25,48 50,62 Q75,76 100,64 Q125,52 150,66 L150,100 Z"
          fill="url(#wave3Live)"
          animate={{
            d: [
              "M0,100 L0,60 Q25,48 50,62 Q75,76 100,64 Q125,52 150,66 L150,100 Z",
              "M0,100 L0,60 Q25,70 50,58 Q75,46 100,60 Q125,74 150,62 L150,100 Z",
              "M0,100 L0,60 Q25,48 50,62 Q75,76 100,64 Q125,52 150,66 L150,100 Z"
            ]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Wave 4 - Green - Optimized */}
        <motion.path
          d="M0,100 L0,72 Q30,62 60,74 Q90,86 120,76 L120,100 Z"
          fill="url(#wave4Live)"
          animate={{
            d: [
              "M0,100 L0,72 Q30,62 60,74 Q90,86 120,76 L120,100 Z",
              "M0,100 L0,72 Q30,82 60,70 Q90,58 120,72 L120,100 Z",
              "M0,100 L0,72 Q30,62 60,74 Q90,86 120,76 L120,100 Z"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Floating gradient orbs - Super Optimized */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{
          top: '10%',
          left: '5%',
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          opacity: 0.08,
          willChange: 'opacity'
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-[80px]"
        style={{
          bottom: '10%',
          right: '5%',
          background: 'radial-gradient(circle, #E87BA8 0%, transparent 70%)',
          opacity: 0.06,
          willChange: 'opacity'
        }}
        animate={{
          opacity: [0.06, 0.1, 0.06]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles - reduced to 6 for better performance */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#E87BA8' : '#6272D9',
            willChange: 'transform, opacity'
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
