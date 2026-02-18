import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowRight, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo_optimized.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #014e63 0%, #013a4a 100%)', color: '#F4F8F9' }}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-2xl rounded-full -ml-32 -mb-32 pointer-events-none"></div>

      <div className="container-max pt-10 md:pt-12 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
              <img
                src={logoImage}
                alt="Dhwayam Logo"
                className="h-16 md:h-20 w-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-col relative justify-center items-center">
                <span 
                  className="alex-brush-regular tracking-wide leading-none relative z-10"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                    color: '#F4F8F9',
                    paddingBottom: '0.2rem',
                  }}
                >
                  <span style={{ fontSize: '1.25em', verticalAlign: '-0.1em' }}>D</span>hwayam
                </span>
                
                {/* Swash Underline */}
                <svg 
                  viewBox="0 0 300 30" 
                  className="w-full -mt-6 md:-mt-10 ml-4 md:ml-7 transform -rotate-2"
                  style={{ height: 'clamp(8px, 2vw, 14px)', color: '#F4F8F9' }}
                >
                  <path d="M20,25 Q150,15 280,25" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" />
                </svg>
                <span className="font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[7px] md:text-[9px] opacity-80 mt-1">
                  Where Traditions Converge
                </span>
              </div>
            </Link>
            
            <p className="text-base md:text-lg leading-relaxed mb-4 opacity-90 max-w-lg">
              Seattle's premium Carnatic fusion ensemble. We bridge musical tradition 
              with humanitarian purpose through fundraising concerts and impactful 
              community outreach.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-base md:text-lg font-bold mb-6 tracking-wider uppercase text-white/40">Explore</h4>
              <ul className="space-y-4 font-medium">
                {['About Us', 'Initiatives', 'Events', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(' ', '')}`}
                      className="opacity-70 hover:opacity-100 hover:translate-x-1 transition-all inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold mb-6 tracking-wider uppercase text-white/40">Initiatives</h4>
              <ul className="space-y-4 font-medium">
                {['Youth Welfare', 'Art Therapy', 'Senior Care'].map((item) => (
                  <li key={item}>
                    <Link 
                      to="/initiatives"
                      className="opacity-70 hover:opacity-100 hover:translate-x-1 transition-all inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Social Column */}
            <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-base md:text-lg font-bold mb-6 tracking-wider uppercase text-white/40">Connect</h4>
            <p className="text-sm opacity-80 mb-6 max-w-xs transition-all">Join our journey and stay updated with our latest stories.</p>
            
            <div className="flex flex-col gap-8 w-full items-center md:items-start">
              {/* Social Icons Row */}
              <div className="flex items-center gap-6">
                <motion.a 
                  href="https://www.facebook.com/dhwayam.music/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, translateY: -3 }}
                  className="transition-all duration-300 opacity-80 hover:opacity-100"
                  style={{ color: '#F4F8F9' }}
                  aria-label="Facebook"
                >
                  <Facebook size={28} />
                </motion.a>

                <motion.a 
                  href="https://www.instagram.com/dhwayam.music/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, translateY: -3 }}
                  className="transition-all duration-300 opacity-80 hover:opacity-100"
                  style={{ color: '#F4F8F9' }}
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </motion.a>

                <motion.a 
                  href="mailto:dhwayamband@gmail.com"
                  whileHover={{ scale: 1.15, translateY: -3 }}
                  className="transition-all duration-300 opacity-80 hover:opacity-100"
                  style={{ color: '#F4F8F9' }}
                  aria-label="Email Us"
                >
                  <Mail size={28} />
                </motion.a>
              </div>
              
              {/* Let's Talk Section */}
              <div className="md:border-l border-white/10 md:pl-6 text-center md:text-left">
                <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Let's Talk</p>
                <a href="mailto:dhwayamband@gmail.com" className="text-sm font-medium break-all hover:opacity-80 transition-opacity">
                  dhwayamband@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm opacity-60">© 2026 Dhwayam Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;