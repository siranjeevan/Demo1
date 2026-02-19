import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, HandHeart, ArrowRight, Clock, Tag, Facebook, Instagram, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import microsoftEventImage from '../assets/image.png';
import eventsHeroBg from '../assets/events-hero-bg.png';

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [eventsData, setEventsData] = useState({ upcomingEvents: [], pastEvents: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyeqZk88aXSZ3Dum65Ku7bf3HLC03PcQZMhXBKBBJBrBLZQuqIc-g6-FysRwrG5Tzbj/exec');
        const data = await response.json();
        setEventsData(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const { upcomingEvents, pastEvents } = eventsData;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F8F9]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#00475b]/20 border-t-[#00475b] rounded-full mb-4"
        />
        <p className="text-[#00475b]/60 font-serif italic animate-pulse">Experiencing the magic...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={eventsHeroBg} 
            alt="Concert background" 
            className="w-full h-full object-cover"
          />
          {/* Professional Overlay System */}
          <div className="absolute inset-0 bg-[#00475b]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00475b]/40 to-[#F4F8F9]"></div>
          
          {/* Ambient Light Effects */}
          <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-teal-400/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[20vw] h-[20vw] bg-[#fbbf24]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-max relative z-10 py-24 md:py-32">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center text-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[0.4em] text-xs md:text-sm font-bold text-white mb-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
              >
                Experience the Magic
              </motion.span>
              
              <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight text-white">
                Our <span className="relative inline-block">
                  <span className="relative z-10 italic">Events</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="absolute bottom-4 left-0 h-3 md:h-5 bg-teal-300/30 -z-0 rounded-full"
                  ></motion.div>
                </span>
              </h1>
              
              <div className="w-16 h-1 bg-white/30 mb-8 rounded-full"></div>
              
              <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 font-light px-4">
                Join us at our upcoming performances and see how music creates 
                lasting change in our community. Every note played contributes 
                to a greater cause.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-[#00475b]/30"></div>
                <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#00475b]/60">Stay Updated</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#00475b]">
                Upcoming <span className="gradient-text italic">Events</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-2xl border flex flex-col lg:flex-row" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                  {/* Left Content Side */}
                  <div className="flex-[2] p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-teal-50 text-[#00475b] border border-teal-900/5">
                        {event.initiative}
                      </span>
                      <div className="flex items-center text-[#00475b] font-semibold opacity-70">
                        <Calendar className="mr-2" size={14} />
                        <span className="text-xs uppercase tracking-wider">{event.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold mb-4 text-[#00475b]">{event.title}</h3>
                    <p className="text-lg mb-8 leading-relaxed text-[#00475b]/70 font-light">{event.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-4">
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <Clock size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.time}</span>
                      </div>
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <MapPin size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.location}</span>
                      </div>
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <Users size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.partner}</span>
                      </div>
                      <div className="flex items-center text-[#014e63]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#F4F8F9]">
                          <Tag size={16} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{event.ticketInfo}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Action Side */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center items-center text-center bg-teal-50/20">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-white border border-teal-900/5">
                      <HandHeart style={{ color: '#00475b' }} size={32} />
                    </div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-3 text-[#00475b]/40">Engage</h4>
                    <p className="text-sm mb-8 leading-relaxed text-[#00475b]/60 font-medium">
                      Be part of our mission to create positive change through the power of Carnatic fusion.
                    </p>
                    <motion.button 
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#00475b', color: '#F4F8F9' }}
                    >
                      Learn More <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-[#00475b]/30"></div>
                <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#00475b]/60">Our Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#00475b]">
                Past <span className="gradient-text italic">Events</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-2xl border flex flex-col lg:flex-row" style={{ borderColor: 'rgba(1, 78, 99, 0.05)' }}>
                  {/* Left Content Side */}
                  <div className="flex-[2] p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: 'rgba(1, 78, 99, 0.1)', color: '#014e63' }}>
                        {event.initiative}
                      </span>
                      <div className="flex items-center text-[#014e63] font-medium opacity-80">
                        <Calendar className="mr-2" size={16} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold mb-6 text-[#00475b]">{event.title}</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-[#00475b]">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-teal-50 border border-teal-900/5">
                          <MapPin size={14} className="opacity-70" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide opacity-60">{event.location}</span>
                      </div>
                      <div className="flex items-center text-[#00475b]">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-teal-50 border border-teal-900/5">
                          <Users size={14} className="opacity-70" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide opacity-60">{event.partner}</span>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-teal-50 border border-teal-900/10">
                      <div className="p-1.5 rounded-full bg-white shadow-sm border border-teal-900/5">
                        <HandHeart style={{ color: '#00475b' }} size={16} />
                      </div>
                      <span className="font-bold text-[#00475b] text-xs uppercase tracking-widest">{event.impact}</span>
                    </div>
                  </div>
                  
                  {/* Right Side (Image or Impact Stats) */}
                  <div className="flex-1 min-h-[300px] lg:min-h-0 overflow-hidden">
                    {event.image ? (
                      <div 
                        className="relative h-full w-full cursor-pointer group"
                        onClick={() => setSelectedImage(event.image)}
                      >
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-1">Impact Created</h4>
                          <p className="text-3xl font-serif font-bold text-white mb-2">{event.fundsRaised}</p>
                          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-white/30 rounded-full mb-4"></div>
                          <span className="text-[10px] items-center gap-2 text-white/40 uppercase tracking-widest flex group-hover:opacity-100 opacity-0 transition-opacity">
                            View Poster <ArrowRight size={10} />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full p-10 flex flex-col justify-center items-center text-center bg-teal-50/30">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-white border border-teal-900/5">
                          <HandHeart style={{ color: '#00475b' }} size={32} />
                        </div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00475b]/40 mb-2">Impact Created</h4>
                        <p className="text-4xl font-serif font-bold text-[#00475b] mb-4">{event.fundsRaised}</p>
                        <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-40 text-[#00475b] font-bold">
                          Transformed into <br /> Positive Action
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>




      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full screen view"
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg cursor-default"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Events;