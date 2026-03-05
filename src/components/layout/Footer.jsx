import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowRight, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/logo_optimized.png';
import textImage from '../../assets/images/Text1.png';

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
            <Link to="/" className="flex flex-col items-center gap-4 mb-8 group pl-10 md:pl-36">
              <img
                src={logoImage}
                alt="Dhwayam Logo"
                className="h-28 md:h-32 w-auto transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <img
                src={textImage}
                alt="Dhwayam Text"
                className="w-60 md:w-72 h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </Link>


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
                  href="https://www.facebook.com/profile.php?id=61587706409032"
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
                  href="https://www.instagram.com/dhwayam/"
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