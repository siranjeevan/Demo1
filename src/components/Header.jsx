import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/Hope3-logo (4).png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Impact', path: '/impact' },
    { name: 'Events', path: '/events' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full backdrop-blur-sm z-50 shadow-sm" style={{ backgroundColor: 'rgba(244, 248, 249, 0.95)', borderBottom: '1px solid rgba(1, 78, 99, 0.2)' }}>
      <nav className="container-max section-padding py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <motion.img
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              src={logoImage}
              alt="Dhwayam Logo"
              className="h-[100px] w-auto drop-shadow-lg"
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col relative"
            >
              {/* Main Brand Name with Animated Gradient */}
              <span 
                className="text-3xl font-serif font-bold tracking-tight"
                style={{ 
                  background: 'linear-gradient(135deg, #014e63 0%, #0891b2 50%, #014e63 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              >
                Dhwayam
              </span>
              
              {/* Decorative Line */}
              <div 
                className="h-[2px] w-full my-1 rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, #014e63, #0891b2, transparent)'
                }}
              />
              
              {/* Tagline with Modern Style */}
              <span 
                className="text-[10px] font-semibold tracking-[0.25em] uppercase"
                style={{ 
                  color: '#0891b2',
                  textShadow: '0 0 20px rgba(8, 145, 178, 0.3)'
                }}
              >
                Where Tradition Converge
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative font-medium transition-colors duration-300"
                style={{ 
                  color: isActive(item.path) ? '#014e63' : 'rgba(1, 78, 99, 0.7)'
                }}
                onMouseEnter={(e) => e.target.style.color = '#014e63'}
                onMouseLeave={(e) => e.target.style.color = isActive(item.path) ? '#014e63' : 'rgba(1, 78, 99, 0.7)'}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#014e63' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: '#014e63',
                color: '#F4F8F9'
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: 'rgba(1, 78, 99, 0.7)' }}
            onMouseEnter={(e) => e.target.style.color = '#014e63'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(1, 78, 99, 0.7)'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 rounded-lg transition-colors"
                style={{ 
                  backgroundColor: isActive(item.path) ? 'rgba(1, 78, 99, 0.1)' : 'transparent',
                  color: isActive(item.path) ? '#014e63' : 'rgba(1, 78, 99, 0.7)'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;