import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo_optimized.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Events', path: '/events' },
  ];

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === '/';
  // Apply transparent header to ALL pages when at top
  const isTransparent = !isScrolled;

  // Modern White/Teal Design Logic
  const headerBackground = isTransparent ? 'transparent' : 'rgba(244, 248, 249, 0.95)';
  const headerBackdrop = isTransparent ? 'none' : 'blur(10px)';
  const headerShadow = isTransparent ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  const textColor = isTransparent ? '#F4F8F9' : '#014e63';
  // Increased sizes per user request
  const logoHeight = isScrolled ? '70px' : '90px';

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300 md:hidden"
      style={{ 
        backgroundColor: headerBackground,
        backdropFilter: headerBackdrop, 
        boxShadow: headerShadow,
        borderBottom: isTransparent ? 'none' : '1px solid rgba(1, 78, 99, 0.1)'
      }}
    >
      <nav className="container-max transition-all duration-300" style={{ paddingBlock: isScrolled ? '0.75rem' : '1.25rem' }}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logoImage}
              alt="Dhwayam Logo"
              className="w-auto drop-shadow-md transition-all duration-300"
              style={{ height: logoHeight }}
            />
            <motion.div className="flex flex-col relative justify-center items-center">
              <span 
                className="alex-brush-regular tracking-wide transition-all duration-300 leading-none relative z-10"
                style={{ 
                  fontSize: isScrolled ? '3.5rem' : '4rem',
                  color: textColor,
                  // Use solid color always for consistent design
                  background: 'none',
                  WebkitBackgroundClip: 'none',
                  WebkitTextFillColor: 'currentColor',
                  paddingBottom: '0.2rem',
                  textShadow: isTransparent ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                <span style={{ fontSize: '1.25em', verticalAlign: '-0.1em' }}>D</span>hwayam
              </span>
              
              {/* Decorative Swash Underline - Arc Shape */}
              <svg 
                viewBox="0 0 300 30" 
                className="w-full -mt-10 ml-7 transition-all duration-300 transform -rotate-2"
                style={{ 
                  height: isScrolled ? '12px' : '15px',
                  color: textColor,
                }}
              >
                <path 
                  d="M20,25 Q150,15 280,25" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
              </svg>
              <span 
                className={`font-semibold tracking-[0.3em] uppercase transition-all duration-300 ${isScrolled ? 'text-[7px]' : 'text-[9px]'}`}
                style={{ 
                  color: isTransparent ? 'rgba(244, 248, 249, 0.8)' : '#000000',
                  opacity: 1,
                  height: 'auto',
                  marginTop: isScrolled ? '0.5rem' : '1rem'
                }}
              >
                Where Traditions Converge
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Modern Uppercase Redesign */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80 group py-2"
                style={{ 
                   color: isActive(item.path) ? (isTransparent ? '#ffffff' : '#014e63') 
                          : (isTransparent ? 'rgba(255, 255, 255, 0.8)' : 'rgba(1, 78, 99, 0.6)')
                }}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full"
                    style={{ backgroundColor: isTransparent ? '#ffffff' : '#014e63' }}
                  />
                )}
                {/* Hover Dot */}
                {!isActive(item.path) && (
                   <div 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100"
                    style={{ backgroundColor: isTransparent ? '#ffffff' : '#014e63' }}
                   />
                )}
              </Link>
            ))}

            {/* Contact CTA Button - Modern Pill */}
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded-full font-bold text-[12px] tracking-[0.15em] uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] outline-none"
              style={{ 
                backgroundColor: isTransparent ? '#F4F8F9' : '#014e63',
                color: isTransparent ? '#014e63' : '#F4F8F9',
                border: '1px solid transparent'
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 transition-colors rounded-full"
            style={{ 
              color: textColor,
              backgroundColor: isTransparent ? 'rgba(255,255,255,0.1)' : 'rgba(1,78,99,0.05)'
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-xl border border-gray-100"
            >
              <div className="p-6 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 px-6 rounded-xl transition-all text-sm font-bold tracking-widest uppercase"
                    style={{ 
                      backgroundColor: isActive(item.path) ? 'rgba(1, 78, 99, 0.1)' : 'transparent',
                      color: isActive(item.path) ? '#014e63' : 'rgba(1, 78, 99, 0.8)',
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-gray-100">
                  <Link 
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-4 text-center rounded-xl font-bold text-sm tracking-widest uppercase transition-transform active:scale-95"
                    style={{ backgroundColor: '#014e63', color: '#F4F8F9' }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;