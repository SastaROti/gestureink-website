import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AnimatedGestureProps {
  type: 'slowBlink' | 'headNod' | 'eyebrowRaise' | 'smile';
  size?: number;
  color: string;
  autoPlay?: boolean;
}

export default function AnimatedGesture({ type, size = 200, color, autoPlay = true }: AnimatedGestureProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1500);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  // Slow Blink - eyes close and open
  if (type === 'slowBlink') {
    return (
      <div className="relative" style={{ width: size, height: size * 0.8 }}>
        <svg width={size} height={size * 0.8} viewBox="0 0 200 160">
          <defs>
            <filter id={`glow-${type}`}>
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Eyebrow */}
          <motion.rect
            x="50" y="20" width="100" height="8" rx="4"
            fill={color}
            filter={`url(#glow-${type})`}
          />
          
          {/* Eye shape - animates closed/open */}
          <motion.path
            d="M25,80 Q75,50 100,50 T175,80 Q125,110 100,110 T25,80 Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
            animate={{
              d: isAnimating 
                ? "M25,80 Q75,78 100,78 T175,80 Q125,82 100,82 T25,80 Z"
                : "M25,80 Q75,50 100,50 T175,80 Q125,110 100,110 T25,80 Z"
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Pupil */}
          <motion.circle
            cx="100" cy="80" r="20"
            fill={color}
            filter={`url(#glow-${type})`}
            animate={{
              scaleY: isAnimating ? 0.1 : 1,
              opacity: isAnimating ? 0.3 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Light reflection */}
          <motion.circle
            cx="90" cy="70" r="6"
            fill="white"
            animate={{
              opacity: isAnimating ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  // Head Nod - entire face moves down
  if (type === 'headNod') {
    return (
      <motion.div 
        className="relative"
        style={{ width: size, height: size * 0.8 }}
        animate={{
          y: isAnimating ? 20 : 0
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <svg width={size} height={size * 0.8} viewBox="0 0 200 160">
          <defs>
            <filter id={`glow-nod`}>
              <feGaussianBlur stdDeviation="4"/>
            </filter>
          </defs>
          
          {/* Eyebrow */}
          <rect x="50" y="20" width="100" height="8" rx="4" fill={color} filter="url(#glow-nod)" />
          
          {/* Eye */}
          <path
            d="M25,80 Q75,50 100,50 T175,80 Q125,110 100,110 T25,80 Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
          />
          
          {/* Pupil */}
          <circle cx="100" cy="80" r="20" fill={color} filter="url(#glow-nod)" />
          <circle cx="90" cy="70" r="6" fill="white" />
        </svg>
        
        {/* Down arrow indicator */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: isAnimating ? [0, 8, 0] : 0,
            opacity: isAnimating ? [0.6, 1, 0.6] : 0.4
          }}
          transition={{ duration: 0.6 }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    );
  }

  // Eyebrow Raise
  if (type === 'eyebrowRaise') {
    return (
      <div className="relative" style={{ width: size, height: size * 0.8 }}>
        <svg width={size} height={size * 0.8} viewBox="0 0 200 160">
          <defs>
            <filter id="glow-brow">
              <feGaussianBlur stdDeviation="4"/>
            </filter>
          </defs>
          
          {/* Animated eyebrow */}
          <motion.rect
            x="50" width="100" height="8" rx="4"
            fill={color}
            filter="url(#glow-brow)"
            animate={{
              y: isAnimating ? 10 : 25
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          
          {/* Eye - wider when eyebrow raised */}
          <motion.path
            d="M25,80 Q75,50 100,50 T175,80 Q125,110 100,110 T25,80 Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
            animate={{
              d: isAnimating
                ? "M25,75 Q75,40 100,40 T175,75 Q125,105 100,105 T25,75 Z"
                : "M25,80 Q75,50 100,50 T175,80 Q125,110 100,110 T25,80 Z"
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Pupil */}
          <circle cx="100" cy="80" r="20" fill={color} filter="url(#glow-brow)" />
          <circle cx="90" cy="70" r="6" fill="white" />
        </svg>
      </div>
    );
  }

  // Smile with blush
  if (type === 'smile') {
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 200 200">
          <defs>
            <filter id="glow-smile">
              <feGaussianBlur stdDeviation="4"/>
            </filter>
          </defs>
          
          {/* Left eyebrow */}
          <rect x="30" y="30" width="50" height="7" rx="4" fill={color} />
          
          {/* Right eyebrow */}
          <rect x="120" y="30" width="50" height="7" rx="4" fill={color} />
          
          {/* Left eye - squints when smiling */}
          <motion.path
            d="M20,70 Q40,55 50,55 T80,70 Q60,85 50,85 T20,70 Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
            animate={{
              d: isAnimating
                ? "M20,70 Q40,68 50,68 T80,70 Q60,72 50,72 T20,70 Z"
                : "M20,70 Q40,55 50,55 T80,70 Q60,85 50,85 T20,70 Z"
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Right eye - squints when smiling */}
          <motion.path
            d="M120,70 Q140,55 150,55 T180,70 Q160,85 150,85 T120,70 Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
            animate={{
              d: isAnimating
                ? "M120,70 Q140,68 150,68 T180,70 Q160,72 150,72 T120,70 Z"
                : "M120,70 Q140,55 150,55 T180,70 Q160,85 150,85 T120,70 Z"
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Left blush */}
          <motion.ellipse
            cx="35" cy="120" rx="18" ry="12"
            fill="#E8A0B4"
            opacity={isAnimating ? 0.5 : 0.2}
            transition={{ duration: 0.4 }}
          />
          
          {/* Right blush */}
          <motion.ellipse
            cx="165" cy="120" rx="18" ry="12"
            fill="#E8A0B4"
            opacity={isAnimating ? 0.5 : 0.2}
            transition={{ duration: 0.4 }}
          />
          
          {/* Smile arc */}
          <motion.path
            d="M60,140 Q100,160 140,140"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#glow-smile)"
            animate={{
              d: isAnimating
                ? "M60,140 Q100,175 140,140"
                : "M60,140 Q100,160 140,140"
            }}
            transition={{ duration: 0.4 }}
          />
        </svg>
      </div>
    );
  }

  return null;
}

