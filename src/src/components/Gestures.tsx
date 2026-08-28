import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import AnimatedGesture from './AnimatedGesture';

const gestures = [
  {
    type: 'Slow Blink',
    gestureKey: 'slowBlink' as const,
    description: 'Both eyes closed — recommended',
    color: '#8B5CF6',
    detail: 'Close both eyes and hold for 0.5 seconds. The most reliable gesture.'
  },
  {
    type: 'Head Nod',
    gestureKey: 'headNod' as const,
    description: 'Chin drops toward chest',
    color: '#8AA5FF',
    detail: 'Nod your head downward gently. Works great in any lighting.'
  },
  {
    type: 'Eyebrow Raise',
    gestureKey: 'eyebrowRaise' as const,
    description: 'Both brows raised high',
    color: '#D4B872',
    detail: 'Raise both eyebrows like you just got surprised. Fun and expressive.'
  },
  {
    type: 'Smile',
    gestureKey: 'smile' as const,
    description: 'Show your teeth and smile',
    color: '#E87BA8',
    detail: 'A big, genuine smile. ML Kit detects your happiness.'
  }
];

export default function Gestures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedGesture, setSelectedGesture] = useState(0);
  
  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #8B5CF610 0%, #08080C 70%)'
        }}
      />
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-[#F4F1FF] mb-6 leading-tight">
            Pick your
            <br />
            <span 
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #D4B872 50%, #8AA5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              signature move
            </span>
          </h2>
          <p className="text-lg font-medium text-[#ADA8BE] max-w-2xl mx-auto">
            Every gesture is remappable. Choose what feels most natural.
          </p>
        </motion.div>
        
        {/* Gesture selector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {gestures.map((gesture, index) => (
            <button
              key={index}
              onClick={() => setSelectedGesture(index)}
              className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: selectedGesture === index ? `${gesture.color}20` : 'rgba(255,255,255,0.05)',
                borderWidth: '1.6px',
                borderStyle: 'solid',
                borderColor: selectedGesture === index ? `${gesture.color}70` : 'rgba(255,255,255,0.1)',
                color: selectedGesture === index ? '#F4F1FF' : '#ADA8BE',
                boxShadow: selectedGesture === index ? `0 8px 24px ${gesture.color}20` : 'none'
              }}
            >
              {gesture.type}
            </button>
          ))}
        </motion.div>
        
        {/* Selected gesture detail - NOW WITH ANIMATED GESTURE */}
        <motion.div
          key={selectedGesture}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative p-10 rounded-[28px] border max-w-3xl mx-auto overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gestures[selectedGesture].color}14 0%, rgba(255,255,255,0.03) 100%)`,
            borderColor: `${gestures[selectedGesture].color}40`,
            boxShadow: `0 20px 60px ${gestures[selectedGesture].color}20`
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                `radial-gradient(circle at 20% 50%, ${gestures[selectedGesture].color}40 0%, transparent 50%)`,
                `radial-gradient(circle at 80% 50%, ${gestures[selectedGesture].color}40 0%, transparent 50%)`,
                `radial-gradient(circle at 20% 50%, ${gestures[selectedGesture].color}40 0%, transparent 50%)`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative z-10 text-center">
            {/* ANIMATED GESTURE COMPONENT */}
            <div className="flex justify-center mb-6">
              <AnimatedGesture
                type={gestures[selectedGesture].gestureKey}
                size={180}
                color={gestures[selectedGesture].color}
                autoPlay={true}
              />
            </div>
            
            <h3 
              className="text-3xl font-black mb-3"
              style={{ color: gestures[selectedGesture].color }}
            >
              {gestures[selectedGesture].type}
            </h3>
            
            <p className="text-[#ADA8BE] font-semibold text-base mb-4">
              {gestures[selectedGesture].description}
            </p>
            
            <p className="text-[#F4F1FF] font-medium text-lg leading-relaxed">
              {gestures[selectedGesture].detail}
            </p>
          </div>
          
          {/* Animated indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {gestures.map((_, index) => (
              <motion.div
                key={index}
                className="rounded-full"
                style={{
                  width: selectedGesture === index ? 24 : 8,
                  height: 8,
                  backgroundColor: selectedGesture === index ? gestures[selectedGesture].color : 'rgba(255,255,255,0.2)'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Feature callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-[#F4F1FF] mb-2">Instant Response</h4>
            <p className="text-sm text-[#ADA8BE] font-medium">Detection in under 200ms</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-[#F4F1FF] mb-2">Adjustable Sensitivity</h4>
            <p className="text-sm text-[#ADA8BE] font-medium">Easy, Medium, or Hard mode</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-bold text-[#F4F1FF] mb-2">Change Anytime</h4>
            <p className="text-sm text-[#ADA8BE] font-medium">Remap in settings instantly</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
