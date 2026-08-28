import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SignatureEye from './SignatureEye';

const steps = [
  {
    number: '01',
    title: 'Grant Permissions',
    description: 'Camera to detect your face. Accessibility to know when you\'re on supported platforms. We explain everything honestly.',
    color: '#E2C46D',
    icon: '🎥'
  },
  {
    number: '02',
    title: 'Calibrate Your Face',
    description: 'A quick 5-second setup. Position your face in the frame and let ML Kit learn your unique features.',
    color: '#6272D9',
    icon: '✨'
  },
  {
    number: '03',
    title: 'Choose Your Gesture',
    description: 'Slow blink, eyebrow raise, smile, or head nod. Pick what feels most natural and comfortable for you.',
    color: '#8B5CF6',
    icon: '🎯'
  },
  {
    number: '04',
    title: 'Start Scrolling Hands-Free',
    description: 'Works on Instagram Reels, YouTube Shorts, and any platform with vertical scrolling. The floating eye appears. Perform your gesture. Experience the magic.',
    color: '#4ADE80',
    icon: '🚀'
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full blur-[120px]"
        style={{ backgroundColor: '#8B5CF6', opacity: 0.08 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{
          duration: 8,
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
          <div className="flex justify-center mb-6">
            <SignatureEye size={120} color="#8B5CF6" mood="excited" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-[#F4F1FF] mb-6 leading-tight">
            How it works
          </h2>
          <p className="text-lg font-medium text-[#ADA8BE] max-w-2xl mx-auto">
            Four simple steps to unlock your new superpower
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                className="relative p-8 rounded-[24px] border backdrop-blur-sm overflow-hidden h-full"
                style={{
                  background: `linear-gradient(135deg, ${step.color}12 0%, rgba(255,255,255,0.02) 100%)`,
                  borderColor: `${step.color}50`
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 20px 60px ${step.color}30`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background pulse */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${step.color}20 0%, transparent 70%)`
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  {/* Mini number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="text-xs font-black px-3 py-1 rounded-full"
                      style={{
                        background: `${step.color}20`,
                        color: step.color
                      }}
                    >
                      STEP {step.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-[14px] flex items-center justify-center text-3xl mb-5"
                    style={{
                      background: `${step.color}15`,
                      boxShadow: `0 0 20px ${step.color}20`
                    }}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-xl font-black mb-3 leading-tight"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  
                  {/* Description - professional typography */}
                  <p className="text-[#ADA8BE] font-medium text-sm leading-relaxed">
                    {step.description}
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
