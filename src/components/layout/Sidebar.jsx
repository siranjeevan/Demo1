import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Target, Music, Phone, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/logo_optimized.png';
import textImage from '../../assets/images/Text.png';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Single Unified Navigation List
  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Initiatives', path: '/initiatives', icon: Target },
    { name: 'Events', path: '/events', icon: Music },
    { name: 'Contact Us', path: '/contact', icon: Phone },
  ];

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-72 bg-[#F4F8F9] z-50 flex flex-col font-sans hidden md:flex"
    >
      {/* Logo Section - Light Background (No dark bg) */}
      <div className="relative pt-12 pb-8 flex flex-col items-center justify-center z-10">
        <Link to="/" className="flex flex-col items-center justify-center gap-3 group relative z-10">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={logoImage}
            alt="Dhwayam Logo"
            className="w-auto drop-shadow-md transition-all duration-300"
            style={{ height: '140px' }}
          />
          <motion.img
            src={textImage}
            alt="Dhwayam Text"
            className="w-56 h-auto drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity"
            loading="eager"
          />
        </Link>
      </div>

      {/* 
        2. Navigation Section
        Dark Background applied ONLY here
      */}
      <div
        className="flex-1 overflow-y-auto py-6 px-5 space-y-2 relative scrollbar-hide flex flex-col"
        style={{
          backgroundColor: '#00475b',
          borderTopRightRadius: '30px',
        }}
      >
        {/* Abstract background shapes inside nav area */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#fbbf24]/5 rounded-full blur-3xl pointer-events-none" />

        <nav className="space-y-3 relative z-10">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="block group relative perspective-1000">
              {/* 
                 Container: matches dark theme interactions
               */}
              <div className={`relative flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 
                  ${isActive(item.path)
                  ? 'bg-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] translate-x-2'
                  : 'hover:bg-white/10 hover:translate-x-1'
                }`}
              >
                {/* Left Active Accent Bar */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive(item.path) ? '60%' : '0%',
                    opacity: isActive(item.path) ? 1 : 0
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 bg-[#00475b] rounded-r-full"
                />

                <div className="flex items-center gap-4">
                  {/* Icon Container */}
                  <div className={`p-2 rounded-lg transition-all duration-300 
                      ${isActive(item.path)
                      ? 'bg-[#00475b] text-white shadow-lg shadow-[#00475b]/20'
                      : 'bg-transparent text-cyan-100/70 group-hover:text-white'
                    }`}
                  >
                    <item.icon size={20} strokeWidth={isActive(item.path) ? 2 : 1.5} />
                  </div>

                  <span className={`text-[15px] font-medium tracking-wide transition-colors duration-300 
                      ${isActive(item.path)
                      ? 'text-[#00475b] font-bold'
                      : 'text-cyan-100/70 group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                </div>

                {/* Right Arrow */}
                <div className={`transition-all duration-300 transform 
                     ${isActive(item.path)
                    ? 'opacity-100 translate-x-0 text-[#fbbf24]'
                    : 'opacity-0 -translate-x-2 text-white/50 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}>
                  <ChevronRight size={16} strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          ))}
        </nav>

        {/* Bottom Decoration */}
        <div className="mt-auto p-6 text-center opacity-20">
          <div className="w-12 h-1 bg-white/30 rounded-full mx-auto" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
