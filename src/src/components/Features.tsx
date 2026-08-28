import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '👁️',
    title: 'Face Detection Magic',
    description: 'Google ML Kit tracks your facial expressions in real-time with incredible accuracy.',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    icon: '⚡',
    title: 'Smart Camera Pulse',
    description: 'Activates only on supported platforms. Auto-pauses after 30 seconds to save battery.',
    color: '#FFD700',
    gradient: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: '🎨',
    title: 'Playful Animations',
    description: 'Wave transitions, eye blinks, and haptic feedback on every interaction.',
    color: '#FF6B9D',
    gradient: 'from-pink-400 to-pink-600'
  },
  {
    icon: '🔒',
    title: 'Privacy Obsessed',
    description: 'Camera data never stored or uploaded. Everything happens locally on your device.',
    color: '#4ADE80',
    gradient: 'from-green-400 to-green-600'
  },
  {
    icon: '🎮',
    title: 'Remappable Gestures',
    description: 'Choose your scroll trigger: eyebrow raise, blink, smile, or head nod.',
    color: '#00D4FF',
    gradient: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: '🌊',
    title: 'Multi-Platform Support',
    description: 'Works seamlessly on Instagram Reels, YouTube Shorts, and other vertical scroll platforms.',
    color: '#FF8C42',
    gradient: 'from-orange-400 to-orange-600'
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080C] via-[#0E0A16] to-[#08080C]" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Eye symbol */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 blur-xl"
                style={{
                  background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
                  opacity: 0.4
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <svg width="80" height="60" viewBox="0 0 100 60" className="relative z-10">
                <defs>
                  <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#E87BA8" />
                  </linearGradient>
                </defs>
                <path
                  d="M10,30 Q30,10 50,10 T90,30 Q70,50 50,50 T10,30 Z"
                  fill="none"
                  stroke="url(#eyeGrad)"
                  strokeWidth="3"
                />
                <circle cx="50" cy="30" r="12" fill="url(#eyeGrad)" />
                <circle cx="45" cy="25" r="4" fill="white" />
              </svg>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black text-[#F4F1FF] mb-6 leading-tight">
            Premium Experience
            <br />
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #E87BA8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Crafted with Care
            </span>
          </h2>
          <p className="text-lg font-medium text-[#ADA8BE] max-w-2xl mx-auto">
            Every detail polished to perfection. Gestures meet gorgeous design.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <motion.div
                className="relative p-8 rounded-[22px] border backdrop-blur-sm h-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}18 0%, rgba(255,255,255,0.04) 100%)`,
                  borderColor: `${feature.color}40`
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: `${feature.color}80`,
                  boxShadow: `0 20px 40px ${feature.color}30`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.color}30 0%, transparent 60%)`
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-[14px] flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${feature.color}15`
                    }}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#F4F1FF] mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#ADA8BE] font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
