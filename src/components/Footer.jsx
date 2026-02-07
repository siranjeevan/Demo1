import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import logoImage from '../assets/Logo Section.png';

const Footer = () => {
  return (
    <footer className="border-t" style={{ backgroundColor: '#014e63', borderColor: 'rgba(1, 78, 99, 0.2)', color: '#F4F8F9' }}>
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-3 mb-4">
              <img
                src={logoImage}
                alt="Dhwayam Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-serif font-bold" style={{ color: '#F4F8F9' }}>
                Dhwayam
              </h3>
            </Link>
            <p className="mb-4 max-w-md" style={{ color: 'rgba(244, 248, 249, 0.8)' }}>
              A Gen Z-led Carnatic fusion band using music as a bridge between tradition 
              and purpose, creating social impact through fundraising concerts and 
              community outreach programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:dhwayamfoundation@gmail.com"
                className="transition-colors"
                style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Initiatives Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#F4F8F9' }}>
              Our Initiatives
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/initiatives"
                  className="transition-colors"
                  style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                >
                  Harmony for Hope
                </Link>
              </li>
              <li>
                <Link
                  to="/initiatives"
                  className="transition-colors"
                  style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                >
                  Together Through Music
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="transition-colors"
                  style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                >
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#F4F8F9' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="transition-colors"
                  style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="transition-colors"
                  style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                >
                  Book Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors"
                  style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors"
                  style={{ color: 'rgba(244, 248, 249, 0.7)' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4F8F9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(244, 248, 249, 0.7)'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: 'rgba(1, 78, 99, 0.2)' }}>
          <p className="text-sm" style={{ color: 'rgba(244, 248, 249, 0.7)' }}>
            © 2026 Dhwayam Foundation. All rights reserved.
          </p>
          <p className="text-sm mt-2 md:mt-0" style={{ color: 'rgba(244, 248, 249, 0.7)' }}>
            Contact: dhwayamfoundation@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;