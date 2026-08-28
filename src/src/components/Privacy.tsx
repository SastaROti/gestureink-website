import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const privacyPoints = [
  {
    icon: '🎥',
    title: 'Camera never recorded',
    description: 'Your camera feed is processed live on your device. Nothing is ever saved or uploaded.',
    color: '#4ADE80'
  },
  {
    icon: '🔋',
    title: 'Auto pauses to save battery',
    description: 'When your face isn\'t visible for 30 seconds, camera shuts off automatically.',
    color: '#D4B872'
  },
  {
    icon: '🚫',
    title: 'Accessibility reads one word',
    description: 'We only check if "Reels" appears on screen. No messages, passwords or content is read.',
    color: '#8AA5FF'
  },
  {
    icon: '💾',
    title: 'Stats stay on device',
    description: 'Your scroll count and session data is stored locally only. Never sent anywhere.',
    color: '#D4B872'
  },
  {
    icon: '🔒',
    title: 'No accounts, no tracking',
    description: 'GestureInk has no login, no analytics, no ads. Just your face and your Reels.',
    color: '#8B5CF6'
  },
  {
    icon: '📱',
    title: 'Data stored locally only',
    description: 'Everything lives in your phone\'s private storage. Uninstalling removes it all.',
    color: '#4ADE80'
  }
];

export default function Privacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #08080C 0%, #0A1A0F 50%, #08080C 100%)'
        }}
      />
      
      {/* Floating orb */}
      <motion.div
        className="absolute top-1/2 right-10 w-[250px] h-[250px] rounded-full blur-[100px]"
        style={{ backgroundColor: '#4ADE80', opacity: 0.1 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-sm font-bold text-[#4ADE80] uppercase tracking-wider">
              Privacy First
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-[#F4F1FF] mb-6 leading-tight">
            What happens between
            <br />
            you and your camera
            <br />
            <span 
              style={{
                background: 'linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              stays between you
            </span>
          </h2>
          <p className="text-lg font-medium text-[#ADA8BE] max-w-2xl mx-auto">
            Zero compromise on privacy. Every pixel processed locally. Always.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privacyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className="relative p-6 rounded-[20px] border backdrop-blur-sm h-full transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${point.color}08 0%, rgba(255,255,255,0.02) 100%)`,
                  borderColor: `${point.color}30`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${point.color}15`
                  }}
                >
                  {point.icon}
                </div>
                
                <h3 className="text-lg font-bold text-[#F4F1FF] mb-2">
                  {point.title}
                </h3>
                
                <p className="text-[#ADA8BE] font-medium text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-flex items-center gap-4 px-8 py-5 rounded-full border"
            style={{
              background: 'linear-gradient(135deg, #4ADE8010 0%, rgba(255,255,255,0.02) 100%)',
              borderColor: '#4ADE8040'
            }}
          >
            <div className="w-10 h-10 rounded-full bg-[#4ADE80] bg-opacity-20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-[#F4F1FF]">
              100% Local Processing • 0% Data Collection • Open to Audit
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
