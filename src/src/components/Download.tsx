import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import InkOcean from './InkOcean';
import SignatureEye from './SignatureEye';

export default function Download() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="download" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <InkOcean primary="#8B5CF6" secondary="#E87BA8" speed={7} />
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 rounded-[32px] border text-center"
          style={{
            background: 'linear-gradient(135deg, #8B5CF614 0%, rgba(255,255,255,0.03) 100%)',
            borderColor: '#8B5CF660',
            boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <SignatureEye size={160} color="#8B5CF6" mood="excited" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-[#F4F1FF] mb-6 leading-tight"
          >
            Your eyebrows
            <br />
            called.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl font-semibold text-[#ADA8BE] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            They want a main character moment. Give it to them.
            <br />
            <span className="text-[#8B5CF6]">Download GestureInk now.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-[22px] font-bold text-lg text-white overflow-hidden min-w-[260px] justify-center"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6D3FD4 100%)',
                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download for Android
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6D3FD4] to-[#8B5CF6]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            
            <button
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-[22px] font-bold text-lg overflow-hidden min-w-[260px] justify-center border-2 transition-all duration-300"
              style={{
                borderColor: '#8B5CF660',
                color: '#F4F1FF',
                background: 'rgba(139, 92, 246, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#8B5CF6';
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#8B5CF660';
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
                Join Waitlist
              </span>
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-6 flex-wrap text-sm font-semibold text-[#ADA8BE]"
          >
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Android 8.0+
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free Forever
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No Ads
            </div>
          </motion.div>
        </motion.div>
        
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p 
            className="text-2xl md:text-3xl font-black italic text-[#F4F1FF] opacity-60"
          >
            "Blinking is now a skill. You're welcome 🫡"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
