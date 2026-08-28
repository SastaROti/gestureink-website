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
          <linearGradient id="wave5Live" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.005" />
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
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Wave 5 - Gold - Optimized */}
        <motion.path
          d="M0,100 L0,82 Q40,75 80,84 Q120,93 160,85 L160,100 Z"
          fill="url(#wave5Live)"
          animate={{
            d: [
              "M0,100 L0,82 Q40,75 80,84 Q120,93 160,85 L160,100 Z",
              "M0,100 L0,82 Q40,90 80,81 Q120,72 160,82 L160,100 Z",
              "M0,100 L0,82 Q40,75 80,84 Q120,93 160,85 L160,100 Z"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Floating gradient orbs - Optimized */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          top: '10%',
          left: '5%',
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          opacity: 0.1
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          top: '50%',
          right: '10%',
          background: 'radial-gradient(circle, #E87BA8 0%, transparent 70%)',
          opacity: 0.08
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.13, 0.08]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full blur-[100px]"
        style={{
          bottom: '5%',
          left: '30%',
          background: 'radial-gradient(circle, #4ADE80 0%, transparent 70%)',
          opacity: 0.07
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.07, 0.12, 0.07]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles - reduced to 12 for performance */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 4 === 0 ? '#8B5CF6' : i % 4 === 1 ? '#E87BA8' : i % 4 === 2 ? '#6272D9' : '#4ADE80',
          }}
          animate={{
            y: [0, -50 - Math.random() * 50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5 + Math.random(), 1]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
