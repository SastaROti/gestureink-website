import { motion } from 'framer-motion';

interface InkOceanProps {
  primary?: string;
  secondary?: string;
  speed?: number;
}

export default function InkOcean({ 
  primary = '#8B5CF6', 
  secondary = '#9E96B6',
  speed = 8 
}: InkOceanProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${primary}10 0%, #08080C 50%, #020204 100%)`
        }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute -top-8 -left-10 w-[200px] h-[200px] rounded-full blur-[80px]"
        style={{ backgroundColor: primary, opacity: 0.16 }}
        animate={{
          y: [0, 10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: speed * 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[140px] -right-9 w-[160px] h-[160px] rounded-full blur-[80px]"
        style={{ backgroundColor: secondary, opacity: 0.16 }}
        animate={{
          y: [0, -8, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: speed * 0.7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[80px] left-8 w-[120px] h-[120px] rounded-full blur-[80px]"
        style={{ backgroundColor: primary, opacity: 0.16 }}
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: speed * 0.9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated waves */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={primary} stopOpacity="0.13" />
            <stop offset="100%" stopColor={primary} stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={secondary} stopOpacity="0.11" />
            <stop offset="100%" stopColor={secondary} stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,100 L0,52 Q22,27 50,53 T100,52 L100,100 Z"
          fill="url(#wave1)"
          vectorEffect="non-scaling-stroke"
          initial={{ d: "M0,100 L0,52 Q22,27 50,53 T100,52 L100,100 Z" }}
          animate={{ d: "M0,100 L0,52 Q22,45 50,35 T100,52 L100,100 Z" }}
          transition={{
            duration: speed,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,100 L0,64 Q22,54 50,66 T100,64 L100,100 Z"
          fill="url(#wave2)"
          vectorEffect="non-scaling-stroke"
          initial={{ d: "M0,100 L0,64 Q22,54 50,66 T100,64 L100,100 Z" }}
          animate={{ d: "M0,100 L0,64 Q22,74 50,56 T100,64 L100,100 Z" }}
          transition={{
            duration: speed * 0.9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,100 L0,76 Q22,71 50,77 T100,76 L100,100 Z"
          fill="url(#wave3)"
          vectorEffect="non-scaling-stroke"
          initial={{ d: "M0,100 L0,76 Q22,71 50,77 T100,76 L100,100 Z" }}
          animate={{ d: "M0,100 L0,76 Q22,81 50,74 T100,76 L100,100 Z" }}
          transition={{
            duration: speed * 1.1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,100 L0,86 Q22,81 50,87 T100,86 L100,100 Z"
          fill="url(#wave4)"
          vectorEffect="non-scaling-stroke"
          initial={{ d: "M0,100 L0,86 Q22,81 50,87 T100,86 L100,100 Z" }}
          animate={{ d: "M0,100 L0,86 Q22,91 50,84 T100,86 L100,100 Z" }}
          transition={{
            duration: speed * 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
