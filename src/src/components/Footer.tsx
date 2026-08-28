import SignatureEye from './SignatureEye';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white border-opacity-5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <SignatureEye size={44} color="#8B5CF6" mood="happy" />
              <h3 
                className="text-2xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #D4D0E6 0%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                GestureInk
              </h3>
            </div>
            <p className="text-[#ADA8BE] font-medium text-sm leading-relaxed max-w-sm">
              Scroll with your soul, not your thumb. The first gesture-based extension for Instagram Reels.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-[#F4F1FF] font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#download" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-[#F4F1FF] font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ADA8BE] hover:text-[#8B5CF6] font-medium text-sm transition-colors">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white border-opacity-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#ADA8BE] font-medium text-sm">
            © 2024 GestureInk. Made with 👁️ for Instagram lovers.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-[#ADA8BE] hover:text-[#8B5CF6] transition-colors"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            
            <a 
              href="#" 
              className="text-[#ADA8BE] hover:text-[#8B5CF6] transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            
            <a 
              href="#" 
              className="text-[#ADA8BE] hover:text-[#8B5CF6] transition-colors"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
