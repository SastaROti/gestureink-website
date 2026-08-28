import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SignatureEyeProps {
  size?: number;
  color?: string;
  mood?: 'calm' | 'happy' | 'excited' | 'focused';
}

export default function SignatureEye({ 
  size = 180, 
  color = '#8B5CF6',
  mood = 'calm'
}: SignatureEyeProps) {
  const [blinking, setBlinking] = useState(false);
  
  // Random blinking effect
  useEffect(() => {
    const scheduleNextBlink = () => {
      const delay = 3500 + Math.random() * 2500;
      setTimeout(() => {
        setBlinking(true);
        setTimeout(() => {
          setBlinking(false);
          scheduleNextBlink();
        }, 200);
      }, delay);
    };
    scheduleNextBlink();
  }, []);
  
  const browY = mood === 'happy' ? -3 : mood === 'excited' ? -6 : mood === 'focused' ? 1 : 0;
  const scaleY = mood === 'happy' ? 0.88 : mood === 'focused' ? 0.82 : 1.0;
  const hasBlush = mood === 'happy' || mood === 'excited';
  
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size * 0.88 }}
      animate={{ y: [0, 4.5, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-[50px]"
        style={{
          backgroundColor: color,
          opacity: 0.1,
          transform: 'scale(1.2)'
        }}
      />
      
      {/* Eyebrow */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          top: size * 0.08 + browY,
          width: size * 0.5,
          height: size * 0.052,
          backgroundColor: color,
          boxShadow: `0 0 14px ${color}40`
        }}
        animate={{ y: [0, 1.5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Eye white/shape */}
      <motion.div
        className="absolute left-0 right-0 mx-auto overflow-hidden"
        style={{
          top: size * 0.22,
          width: size,
          height: size * 0.50,
        }}
        animate={{
          scaleY: blinking ? 0.06 : scaleY
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut"
        }}
      >
        {/* Eye shape with gradient */}
        <svg
          width={size}
          height={size * 0.50}
          viewBox="0 0 100 50"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id={`eyeGrad-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.03" />
            </linearGradient>
            <filter id={`eyeGlow-${size}`}>
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          
          {/* Eye outline glow */}
          <path
            d="M0,25 Q25,0 50,0 T100,25 Q75,50 50,50 T0,25 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            filter={`url(#eyeGlow-${size})`}
            opacity="0.3"
          />
          
          {/* Eye fill */}
          <path
            d="M0,25 Q25,0 50,0 T100,25 Q75,50 50,50 T0,25 Z"
            fill={`url(#eyeGrad-${size})`}
          />
          
          {/* Eye border */}
          <path
            d="M0,25 Q25,0 50,0 T100,25 Q75,50 50,50 T0,25 Z"
            fill="none"
            stroke={color}
            strokeWidth="3.5"
          />
        </svg>
        
        {/* Pupil with drift animation */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, size * 0.04, 0, -size * 0.04, 0],
            y: [0, size * 0.015, 0, -size * 0.015, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div
            className="rounded-full relative"
            style={{
              width: size * 0.22,
              height: size * 0.22,
              backgroundColor: color,
              boxShadow: `0 0 20px ${color}80, 0 0 3px ${color}`
            }}
          >
            {/* Light reflections */}
            <div
              className="absolute rounded-full bg-white"
              style={{
                top: '18%',
                left: '22%',
                width: '22%',
                height: '22%'
              }}
            />
            <div
              className="absolute rounded-full bg-white opacity-60"
              style={{
                bottom: '25%',
                right: '25%',
                width: '10%',
                height: '10%'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Blush marks */}
      {hasBlush && (
        <>
          <div
            className="absolute rounded-full"
            style={{
              bottom: size * 0.10,
              left: size * 0.10,
              width: size * 0.10,
              height: size * 0.055,
              backgroundColor: '#E8A0B4',
              opacity: 0.32
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: size * 0.10,
              right: size * 0.10,
              width: size * 0.10,
              height: size * 0.055,
              backgroundColor: '#E8A0B4',
              opacity: 0.32
            }}
          />
        </>
      )}
      
      {/* Smile line for happy mood */}
      {mood === 'happy' && (
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            bottom: size * 0.16,
            width: size * 0.20,
            height: 2.5,
            backgroundColor: color,
            opacity: 0.45
          }}
        />
      )}
    </motion.div>
  );
}
